# AuthorizationConfigRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizationConfigRulesType** | Pointer to [**[]AuthorizationConfigRuleType**](AuthorizationConfigRuleType.md) | List of AuthorizationRuleType. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAuthorizationConfigRules

`func NewAuthorizationConfigRules() *AuthorizationConfigRules`

NewAuthorizationConfigRules instantiates a new AuthorizationConfigRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationConfigRulesWithDefaults

`func NewAuthorizationConfigRulesWithDefaults() *AuthorizationConfigRules`

NewAuthorizationConfigRulesWithDefaults instantiates a new AuthorizationConfigRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizationConfigRulesType

`func (o *AuthorizationConfigRules) GetAuthorizationConfigRulesType() []AuthorizationConfigRuleType`

GetAuthorizationConfigRulesType returns the AuthorizationConfigRulesType field if non-nil, zero value otherwise.

### GetAuthorizationConfigRulesTypeOk

`func (o *AuthorizationConfigRules) GetAuthorizationConfigRulesTypeOk() (*[]AuthorizationConfigRuleType, bool)`

GetAuthorizationConfigRulesTypeOk returns a tuple with the AuthorizationConfigRulesType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationConfigRulesType

`func (o *AuthorizationConfigRules) SetAuthorizationConfigRulesType(v []AuthorizationConfigRuleType)`

SetAuthorizationConfigRulesType sets AuthorizationConfigRulesType field to given value.

### HasAuthorizationConfigRulesType

`func (o *AuthorizationConfigRules) HasAuthorizationConfigRulesType() bool`

HasAuthorizationConfigRulesType returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizationConfigRules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizationConfigRules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizationConfigRules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizationConfigRules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizationConfigRules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizationConfigRules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizationConfigRules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizationConfigRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


