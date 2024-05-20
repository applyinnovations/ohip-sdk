# AuthorizerGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerGroups** | Pointer to [**[]AuthorizerGroupType**](AuthorizerGroupType.md) | Authorizer Group | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAuthorizerGroups

`func NewAuthorizerGroups() *AuthorizerGroups`

NewAuthorizerGroups instantiates a new AuthorizerGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerGroupsWithDefaults

`func NewAuthorizerGroupsWithDefaults() *AuthorizerGroups`

NewAuthorizerGroupsWithDefaults instantiates a new AuthorizerGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerGroups

`func (o *AuthorizerGroups) GetAuthorizerGroups() []AuthorizerGroupType`

GetAuthorizerGroups returns the AuthorizerGroups field if non-nil, zero value otherwise.

### GetAuthorizerGroupsOk

`func (o *AuthorizerGroups) GetAuthorizerGroupsOk() (*[]AuthorizerGroupType, bool)`

GetAuthorizerGroupsOk returns a tuple with the AuthorizerGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerGroups

`func (o *AuthorizerGroups) SetAuthorizerGroups(v []AuthorizerGroupType)`

SetAuthorizerGroups sets AuthorizerGroups field to given value.

### HasAuthorizerGroups

`func (o *AuthorizerGroups) HasAuthorizerGroups() bool`

HasAuthorizerGroups returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizerGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizerGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizerGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizerGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizerGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizerGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizerGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizerGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


