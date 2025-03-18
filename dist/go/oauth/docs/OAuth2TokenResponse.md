# OAuth2TokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessToken** | **string** | The access token.  Include this in the header for every subsequent request. | 
**ExpiresIn** | Pointer to **int64** | Time in seconds for the access token to expire (typically, 3600 i.e. 60 minutes) | [optional] 
**TokenType** | Pointer to **string** | The type of access token issued (Bearer). | [optional] 
**OracleTkContext** | Pointer to **string** | Always user_assertion. | [optional] 

## Methods

### NewOAuth2TokenResponse

`func NewOAuth2TokenResponse(accessToken string, ) *OAuth2TokenResponse`

NewOAuth2TokenResponse instantiates a new OAuth2TokenResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOAuth2TokenResponseWithDefaults

`func NewOAuth2TokenResponseWithDefaults() *OAuth2TokenResponse`

NewOAuth2TokenResponseWithDefaults instantiates a new OAuth2TokenResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessToken

`func (o *OAuth2TokenResponse) GetAccessToken() string`

GetAccessToken returns the AccessToken field if non-nil, zero value otherwise.

### GetAccessTokenOk

`func (o *OAuth2TokenResponse) GetAccessTokenOk() (*string, bool)`

GetAccessTokenOk returns a tuple with the AccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessToken

`func (o *OAuth2TokenResponse) SetAccessToken(v string)`

SetAccessToken sets AccessToken field to given value.


### GetExpiresIn

`func (o *OAuth2TokenResponse) GetExpiresIn() int64`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *OAuth2TokenResponse) GetExpiresInOk() (*int64, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *OAuth2TokenResponse) SetExpiresIn(v int64)`

SetExpiresIn sets ExpiresIn field to given value.

### HasExpiresIn

`func (o *OAuth2TokenResponse) HasExpiresIn() bool`

HasExpiresIn returns a boolean if a field has been set.

### GetTokenType

`func (o *OAuth2TokenResponse) GetTokenType() string`

GetTokenType returns the TokenType field if non-nil, zero value otherwise.

### GetTokenTypeOk

`func (o *OAuth2TokenResponse) GetTokenTypeOk() (*string, bool)`

GetTokenTypeOk returns a tuple with the TokenType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenType

`func (o *OAuth2TokenResponse) SetTokenType(v string)`

SetTokenType sets TokenType field to given value.

### HasTokenType

`func (o *OAuth2TokenResponse) HasTokenType() bool`

HasTokenType returns a boolean if a field has been set.

### GetOracleTkContext

`func (o *OAuth2TokenResponse) GetOracleTkContext() string`

GetOracleTkContext returns the OracleTkContext field if non-nil, zero value otherwise.

### GetOracleTkContextOk

`func (o *OAuth2TokenResponse) GetOracleTkContextOk() (*string, bool)`

GetOracleTkContextOk returns a tuple with the OracleTkContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOracleTkContext

`func (o *OAuth2TokenResponse) SetOracleTkContext(v string)`

SetOracleTkContext sets OracleTkContext field to given value.

### HasOracleTkContext

`func (o *OAuth2TokenResponse) HasOracleTkContext() bool`

HasOracleTkContext returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


