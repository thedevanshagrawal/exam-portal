import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { response } from "express";
import jwt from "jsonwebtoken";
import { SchoolDetails } from "../models/SchoolDetails.model.js";
import { questionBank } from "../models/questionBank.model.js";
import { questionPaper } from "../models/questionPaper.model.js";
import { SubjectAndTopic } from "../models/SubjectAndTopic.model.js";
import bcrypt from "bcrypt";


const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating and access token"
        );
    }
};

const registerAdmin = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const {
        fullName,
        email,
        password,
        contact_no,
        user_id,

    } = req.body;

    if (
        [fullName, email, password].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All field are required");
    }

    const existedUser = await User.findOne({
        $or: [{ user_id }, { email }],
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or user_id already exist");
    }

    const user = await User.create({
        fullName,
        email,
        password,
        contact_no,
        user_id,

    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registring the user"
        );
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdUser, "User registered successfully")
        );
});

const registerStudent = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const {

        fullName,
        email,
        password,
        StudentClass,
        gender,
        fathers_name,
        dob,
        contact_no,
        user_id,
        address,
        selectDashboard

    } = req.body;

    if (
        [fullName, email, password].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All field are required");
    }

    const existedUser = await User.findOne({
        $or: [{ user_id }, { email }],
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or user_id already exist");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    const user = await User.create({

        fullName,
        email,
        password,
        StudentClass,
        gender,
        fathers_name,
        dob,
        contact_no,
        user_id,
        address,
        selectDashboard,
        avatar: avatar.url
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registring the user"
        );
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdUser, "User registered successfully")
        );
});

const registerSchool = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const {
        schoolName, email, contact_no, user_id, address, spoc_name, spoc_password, spoc_email, principal_name, principal_id, principal_email, principal_password, selectDashboard, password
    } = req.body;

    if (
        [schoolName, user_id, email].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All field are required");
    }

    if (!(schoolName || email)) {
        throw new ApiError(400, "schoolName or email is required");
    }

    const existedSchool = await User.findOne({
        $or: [{ user_id }, { email }],
    });

    if (existedSchool) {
        throw new ApiError(409, "School with email or school_id already exist");
    }

    const school = await User.create({
        schoolName, email, contact_no, user_id, address, spoc_name, spoc_password, spoc_email, principal_name, principal_id, principal_email, principal_password, selectDashboard, password
    });

    const createdSchool = await User.findById(school._id).select(
        "-password -refreshToken"
    );

    if (!createdSchool) {
        throw new ApiError(
            500,
            "Something went wrong while registring the user"
        );
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdSchool, "User registered successfully")
        );
});


const loginUser = asyncHandler(async (req, res) => {
    const { email, selectDashboard, password } = req.body;

    // Validate request data
    if (!email || !selectDashboard || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Find the user by email
    const user = await User.findOne({
        $or: [
            { email: email },
            { spoc_email: email },
            { principal_email: email }
        ]
    });

    if (!user) {
        return res.status(404).json({ message: "User does not exist" });
    }

    // Check if the password is correct
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid user credentials" });
    }

    // Check if the selected dashboard matches the user's role
    if (user.selectDashboard !== selectDashboard) {
        return res.status(400).json({ message: "No dashboard available for this Dashboard" });
    }

    // Generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const options = {
        httpOnly: true,
        secure: true,
    };

    // Set authentication context
    // Use res.cookie to set cookies and res.json to send response
    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            email: user.email,
            selectDashboard: user.selectDashboard, // Send back the correct role
            token: accessToken, // This is what your frontend expects
            message: "User logged in successfully"
        });
});


const logoutUser = asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
        return res.status(204).json({ message: "No content" });
    }

    // Delete the refresh token from the database or memory
    await Token.deleteOne({ token: refreshToken });

    // Clear the cookies
    res.clearCookie("accessToken", { httpOnly: true, secure: true });
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });

    return res.status(200).json({ message: "Logged out successfully" });
});


const studentProfile = asyncHandler(async (req, res, next) => {
    try {
        const user = req.user; // This is set by the verifyJWT middleware
        if (!user) {
            return next(new ApiError(404, "User not found"));
        }

        res.status(200).json({
            success: true,
            data: user, // Send the user's profile data
        });
    } catch (error) {
        next(new ApiError(500, "Server Error"));
    }
});

const schoolProfileInAdminProfile = asyncHandler(async (req, res) => {
    const { school_id, email } = req.query

    if (!(school_id || email)) {
        throw new ApiError(400, "School Id or email is required")
    }

    const schoolDetails = await User.find(
        {
            school_id,
            email
        },
        "-password"
    )

    if (!schoolDetails?.length) {
        throw new ApiError(404, "No schoolDetails found for the given School Id")
    }

    return res
        .status(201)
        .json(new ApiResponse(
            200, studentDetails, "schoolDetails information fetched successfully"
        ))

})

const createNewSubjectAndTopic = asyncHandler(async (req, res) => {
    const { subject, topic } = req.body;

    if (!subject || !topic) {
        throw new ApiError(400, "Subject and topic is required")
    }

    const subjectAndTopic = await SubjectAndTopic.create({
        subject,
        topic
    })

    return res
        .status(200)
        .json(new ApiResponse(201, subjectAndTopic, "Subject and topic is created"))

})


const viewSubjectAndTopic = asyncHandler(async (req, res) => {
    try {
        const { subject } = req.body;

        // Check if subject is provided
        if (!subject) {
            throw new ApiError(400, "Subject parameter is required");
        }

        // Find documents matching the subject and return only the topic field
        const subjectAndTopic = await SubjectAndTopic.find({ subject }, 'topic');

        // Check if any topics were found for the given subject
        if (subjectAndTopic.length === 0) {
            return res
                .status(404)
                .json(new ApiResponse(404, [], `No topics found for subject: ${subject}`));
        }

        // Respond with the found topics
        res
            .status(200)
            .json(
                new ApiResponse(200, subjectAndTopic, "Subject and Topic Fetched Successfully")
            );
    } catch (error) {
        throw new ApiError(500, `Error in data fetching: ${error.message}`);
    }
});

const createquestionBank = asyncHandler(async (req, res) => {
    const { StudentClass, subject, question, answer, option1, option2, option3, option4, topic, difficulty_level } = req.body



    if (!(subject || topic || question)) {
        throw new ApiError(400, "Subject or topic or question is required")
    }



    const aggregatedData = await SubjectAndTopic.aggregate([
        {
            $match: {
                subject: subject,
                topic: topic
            }
        },
        // Project stage to include necessary fields
        {
            $project: {
                subject: 1,
                topic: 1,
            }
        }
    ]);



    // Prepare the array of question IDs and the full questions data
    const questionsData = aggregatedData.map(question => ({
        subject: question.subject,
        topic: question.topic,
    }));

    const Question = await questionBank.create({
        StudentClass,
        questionsData,
        question,
        answer,
        option1,
        option2,
        option3,
        option4,
        difficulty_level
    })
    console.log("Question: ", Question)

    const createdQuestion = await questionBank.findById(Question._id).select(
        "-refreshToken"
    )

    if (!createdQuestion) {
        throw new ApiError(500, "Something went wrong while creating question paper")
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdQuestion, "Question Paper created successfully")
        )

})

const scheduleQuestionPaper = asyncHandler(async (req, res) => {
    const { StudentClass, subject, topic, examTime, examDate, total_marks, difficulty_level } = req.body;

    // First, aggregate the data from questionBank based on your criteria
    const aggregatedData = await questionBank.aggregate([
        // Match documents that contain the subject in the questionsData array
        {
            $match: {
                "questionsData.subject": subject,
                "questionsData.topic": topic,
            }
        },
        // Unwind the questionsData array to deal with each question individually
        {
            $unwind: "$questionsData"
        },
        // // Match again to ensure only the relevant subject is processed
        // {
        //     $match: {
        //         "questionsData.subject": subject,
        //     }
        // },
        // Project the necessary fields
        {
            $project: {
                _id: 0,  // Exclude the _id field if not needed
                subject: "$questionsData.subject",
                topic: "$questionsData.topic",
                question: 1,
                answer: 1,
                option1: 1,
                option2: 1,
                option3: 1,
                option4: 1,
                difficulty_level: 1,
            }
        }
    ]);




    // Prepare the array of question IDs and the full questions data
    const questionsData = aggregatedData.map(question => ({
        subject: question.subject,
        question: question.question,
        answer: question.answer,
        option1: question.option1,
        option2: question.option2,
        option3: question.option3,
        option4: question.option4,
        topic: question.topic,
        difficulty_level: question.difficulty_level
    }));

    // Now, create the question paper with the aggregated question IDs and data
    const QuestionPaper = await questionPaper.create({
        questionsData,
        StudentClass,
        examTime,
        examDate,
        total_marks,
        difficulty_level,
        questionsData
    });

    // Include the questions data in the response
    const scheduledQuestionPaper = {
        ...QuestionPaper._doc,
        ...questionsData
    };

    if (!QuestionPaper) {
        throw new ApiError(500, "Something went wrong while scheduling paper");
    }



    return res.status(201).json(
        new ApiResponse(200, "Scheduled paper successfully")
    );
});

const getQuestionPaper = asyncHandler(async (req, res) => {
    const { subject } = req.body

    if (!subject) {
        throw new ApiError(404, "subject is required");
    }

    const getquestionPaper = await questionPaper.find({
        "questionsData.subject": subject
    })

    if (!getquestionPaper) {
        throw new ApiError(404, "question not found");
    }


    return res.
        status(200)
        .json({
            success: true,
            getquestionPaper
        })
})

const updatePassword = asyncHandler(async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const { password } = req.body;


        const hashedPassword = await bcrypt.hash(password, 10)

        const updateUserpassword = await User.findByIdAndUpdate(
            user._id,
            { $set: { password: hashedPassword } },
            { new: true }
        );



        if (!updateUserpassword) {
            throw new ApiError(404, "User not found");
        }

        return res.
            status(200)
            .json(
                new ApiResponse(200, updateUserpassword, "Password is updated")
            );

    } catch (error) {
        throw new ApiError(500, "Something went wrong")
    }
});


export {
    registerAdmin,
    registerStudent,
    loginUser,
    logoutUser,
    registerSchool,
    viewSubjectAndTopic,
    createquestionBank,
    scheduleQuestionPaper,
    studentProfile,
    schoolProfileInAdminProfile,
    updatePassword,
    createNewSubjectAndTopic,
    getQuestionPaper
    // refreshAccessToken,
    // changeCurrentPassword,
};
