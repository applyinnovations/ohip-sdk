# AuthorizerGroupsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerGroups** | Pointer to [**[]AuthorizerGroupType**](AuthorizerGroupType.md) | Authorizer Group | [optional] 
**UpdateAuthorizers** | Pointer to **bool** | If true, updates all authorizers in the group. | [optional] 

## Methods

### NewAuthorizerGroupsCriteriaType

`func NewAuthorizerGroupsCriteriaType() *AuthorizerGroupsCriteriaType`

NewAuthorizerGroupsCriteriaType instantiates a new AuthorizerGroupsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerGroupsCriteriaTypeWithDefaults

`func NewAuthorizerGroupsCriteriaTypeWithDefaults() *AuthorizerGroupsCriteriaType`

NewAuthorizerGroupsCriteriaTypeWithDefaults instantiates a new AuthorizerGroupsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerGroups

`func (o *AuthorizerGroupsCriteriaType) GetAuthorizerGroups() []AuthorizerGroupType`

GetAuthorizerGroups returns the AuthorizerGroups field if non-nil, zero value otherwise.

### GetAuthorizerGroupsOk

`func (o *AuthorizerGroupsCriteriaType) GetAuthorizerGroupsOk() (*[]AuthorizerGroupType, bool)`

GetAuthorizerGroupsOk returns a tuple with the AuthorizerGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerGroups

`func (o *AuthorizerGroupsCriteriaType) SetAuthorizerGroups(v []AuthorizerGroupType)`

SetAuthorizerGroups sets AuthorizerGroups field to given value.

### HasAuthorizerGroups

`func (o *AuthorizerGroupsCriteriaType) HasAuthorizerGroups() bool`

HasAuthorizerGroups returns a boolean if a field has been set.

### GetUpdateAuthorizers

`func (o *AuthorizerGroupsCriteriaType) GetUpdateAuthorizers() bool`

GetUpdateAuthorizers returns the UpdateAuthorizers field if non-nil, zero value otherwise.

### GetUpdateAuthorizersOk

`func (o *AuthorizerGroupsCriteriaType) GetUpdateAuthorizersOk() (*bool, bool)`

GetUpdateAuthorizersOk returns a tuple with the UpdateAuthorizers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateAuthorizers

`func (o *AuthorizerGroupsCriteriaType) SetUpdateAuthorizers(v bool)`

SetUpdateAuthorizers sets UpdateAuthorizers field to given value.

### HasUpdateAuthorizers

`func (o *AuthorizerGroupsCriteriaType) HasUpdateAuthorizers() bool`

HasUpdateAuthorizers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


