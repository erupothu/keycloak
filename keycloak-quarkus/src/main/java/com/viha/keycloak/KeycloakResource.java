package com.viha.keycloak;

import io.quarkus.security.Authenticated;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api/admin")
@Authenticated
public class KeycloakResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @RolesAllowed("ADMIN_ROLE")
    @Path("role/grant")
    public String admin() {
        return "granted to Admin";
    }

    @GET
    @Path("grant")
    @Produces(MediaType.TEXT_PLAIN)
    public String adminRoleAny() {
        return "granted to any role";
    }
}
