export interface ButtonComponentProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'error';
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
};

export interface Destination {
    id: string;
    title: string;
    content: string;
    image: string;
    author: string;
    tags: string;
};

export interface CardComponentProps {
    data?: Destination;  
};

export interface ConfirmationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
};

export interface HeaderProps {
    sections?: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    title: string;
};

export interface FooterProps {
    title: string;
    description: string;
};

export interface IconButtonWithTooltipProps {
    icon: React.ElementType; 
    title: string;
    onClick?: () => void;
    redirectTo?: string;
    size?: string;
};

export interface PaginationComponentProps {
    page: number;
    count: number;
    onPageChange: (page: number) => void;
};
