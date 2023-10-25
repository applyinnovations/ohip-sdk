# AuthorizationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationRule** | Pointer to [**AuthorizationRuleType**](AuthorizationRuleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAuthorizationRule

`func NewAuthorizationRule() *AuthorizationRule`

NewAuthorizationRule instantiates a new AuthorizationRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationRuleWithDefaults

`func NewAuthorizationRuleWithDefaults() *AuthorizationRule`

NewAuthorizationRuleWithDefaults instantiates a new AuthorizationRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationRule

`func (o *AuthorizationRule) GetAuthorizationRule() AuthorizationRuleType`

GetAuthorizationRule returns the AuthorizationRule field if non-nil, zero value otherwise.

### GetAuthorizationRuleOk

`func (o *AuthorizationRule) GetAuthorizationRuleOk() (*AuthorizationRuleType, bool)`

GetAuthorizationRuleOk returns a tuple with the AuthorizationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationRule

`func (o *AuthorizationRule) SetAuthorizationRule(v AuthorizationRuleType)`

SetAuthorizationRule sets AuthorizationRule field to given value.

### HasAuthorizationRule

`func (o *AuthorizationRule) HasAuthorizationRule() bool`

HasAuthorizationRule returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizationRule) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizationRule) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizationRule) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizationRule) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizationRule) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizationRule) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizationRule) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizationRule) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


