/**
 * @seriphxyz/astro
 *
 * Astro components and content loader for Seriph widgets.
 * Re-exports all types, API functions, and controllers from @seriphxyz/core.
 */

// Re-export everything from core
export {
  // Constants
  DEFAULT_ENDPOINT,
  API_PATH,
  VISITOR_STORAGE_KEY,

  // Types
  type SeriphConfig,
  type Comment,
  type ReactionCounts,
  type FormSubmitResponse,
  type SubscribeResponse,
  type SeriphPost,

  // Helpers
  buildUrl,
  getSiteKey,
  getVisitorId,
  setVisitorId,

  // API Functions - Forms
  type SubmitFormOptions,
  submitForm,

  // API Functions - Comments
  type FetchCommentsOptions,
  fetchComments,
  type PostCommentOptions,
  postComment,

  // API Functions - Reactions
  type FetchReactionsOptions,
  type FetchReactionsResponse,
  fetchReactions,
  type AddReactionOptions,
  addReaction,
  type RemoveReactionOptions,
  removeReaction,

  // API Functions - Subscriptions
  type SubscribeOptions,
  subscribe,

  // API Functions - Waitlist
  type JoinWaitlistOptions,
  type JoinWaitlistResponse,
  joinWaitlist,

  // API Functions - Views
  type ViewCountsOptions,
  type ViewCounts,
  type RecordViewResponse,
  getViewCounts,
  recordView,

  // API Functions - Posts
  type FetchPostsOptions,
  fetchPosts,
  type FetchPostOptions,
  fetchPost,

  // Controllers
  type ControllerStatus,
  type ControllerListener,
  type SubscribeState,
  type FormState,
  type ReactionsState,
  type CommentsState,
  type WaitlistState,
  SubscribeController,
  WaitlistController,
  FormController,
  ReactionsController,
  CommentsController,
} from "@seriphxyz/core";

// Re-export loader (Astro-specific)
export {
  seriphPostsLoader,
  type SeriphPostsLoaderOptions,
} from "./loader.js";
