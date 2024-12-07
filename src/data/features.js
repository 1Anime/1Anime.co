import {
    IconArrowsRandom,
    IconArticle,
    IconBlockquote,
    IconBook, IconBook2,
    IconBroadcast,
    IconBuilding,
    IconCalendarEvent,
    IconCarouselHorizontal,
    IconCircleArrowUp,
    IconDeviceTv,
    IconExternalLink,
    IconEye,
    IconHierarchy,
    IconSearch, IconStack2,
    IconTag,
    IconThumbUp,
    IconUserCircle,
    IconUserPentagon,
    IconUsersGroup,
    IconUserSquare
} from "@tabler/icons-svelte";

export default {
    available: [
        {
            icon: IconDeviceTv,
            highlight: false,
            onVersion: 1,
            label: "Anime",
            description: "All available anime data on 1Anime"
        },
        {
            icon: IconBook,
            highlight: false,
            onVersion: 1,
            label: "Manga",
            description: "All available manga data on 1Anime"
        },
        {
            icon: IconUserSquare,
            highlight: false,
            onVersion: 1,
            label: "Characters",
            description: "All available character data from 1Anime"
        },
        {
            icon: IconUserPentagon,
            highlight: false,
            onVersion: 1,
            label: "People",
            description: "All available person data related to 1Anime"
        },
        {
            icon: IconUserCircle,
            highlight: false,
            onVersion: 2,
            label: "Users",
            description: "Publicly available user data on 1Anime"
        },
        {
            icon: IconCalendarEvent,
            highlight: false,
            onVersion: 2,
            label: "Seasons",
            description: "Seasonal anime, season list, currently airing, and upcoming on 1Anime"
        },
        {
            icon: IconCircleArrowUp,
            highlight: false,
            onVersion: 2,
            label: "Top Ranking",
            description: "Top ranking anime resources on 1Anime"
        },
        {
            icon: IconBuilding,
            highlight: false,
            onVersion: 2,
            label: "Producers",
            description: "Producer metadata and listing for 1Anime content"
        },
        {
            icon: IconBook2,
            highlight: false,
            onVersion: 2,
            label: "Magazines",
            description: "Magazine metadata and listing related to 1Anime"
        },
        {
            icon: IconCarouselHorizontal,
            highlight: true,
            onVersion: 2,
            label: "Reviews",
            description: "Anime and Manga Reviews by Users on 1Anime"
        },
        {
            icon: IconThumbUp,
            highlight: true,
            onVersion: 2,
            label: "Recommendations",
            description: "Anime and Manga Recommendations by Users on 1Anime"
        },
        {
            icon: IconSearch,
            highlight: true,
            onVersion: 2,
            label: "Advanced Search",
            description: "Advanced querying and Search powered by TypeSense for 1Anime"
        },
        {
            icon: IconEye,
            highlight: true,
            onVersion: 2,
            label: "Watch",
            description: "Latest and most popular Anime promotional and episode releases on 1Anime"
        },
        {
            icon: IconUsersGroup,
            highlight: true,
            onVersion: 2,
            label: "Clubs",
            description: "Publicly available club data on 1Anime"
        },
        {
            icon: IconArrowsRandom,
            highlight: true,
            onVersion: 2,
            label: "Random",
            description: "Query random anime resources on 1Anime"
        },
        {
            icon: IconTag,
            highlight: true,
            onVersion: 2,
            label: "Genres",
            description: "Anime and Manga Genres Listing on 1Anime"
        },
    ],
    upcoming: [
        {
            icon: IconHierarchy,
            highlight: true,
            onVersion: 3,
            label: "AI Apps",
            description: "Innovative AI applications for enhanced anime experience on 1Anime"
        },
        {
            icon: IconStack2,
            highlight: true,
            onVersion: 3,
            label: "New Integrations",
            description: "Exciting new integrations to expand 1Anime's capabilities"
        },
        {
            icon: IconBlockquote,
            highlight: false,
            onVersion: 3,
            label: "New User About",
            description: "Support the new user about pages on 1Anime"
        },
    ]
}