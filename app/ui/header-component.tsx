// External dependencies 
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import AddCardIcon from '@mui/icons-material/AddCard';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// Internal dependencies 
import { HeaderProps } from 'core/models/ui.model';
import { PATHS } from 'core/config/constant';
import IconButtonWithTooltip from 'ui/icon-button';

export default function Header(props: HeaderProps) {
    const { sections, title } = props;

    return (
        <Box>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        p: { xs: 0.1, sm: 1 },
                        gap: { xs: 0.1, sm: 1 },
                        flexWrap: 'wrap',
                        overflow: 'auto',
                    }}
                >
                    <IconButtonWithTooltip
                        icon={AddCardIcon}
                        title="Create new blog"
                        size="medium"
                        redirectTo={PATHS.create}
                    />
                    <IconButtonWithTooltip
                        icon={SearchIcon}
                        size="medium"
                        title="Search blog by tags"
                    />
                </Box>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections?.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    {section.title}
                </Link>
                ))}
            </Toolbar>
        </Box>
    );
}