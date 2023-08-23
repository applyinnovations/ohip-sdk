# AuthorizeCreditCardAmountByProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CCAuthorizationCriteriaType**](CCAuthorizationCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAuthorizeCreditCardAmountByProfileRequest

`func NewAuthorizeCreditCardAmountByProfileRequest() *AuthorizeCreditCardAmountByProfileRequest`

NewAuthorizeCreditCardAmountByProfileRequest instantiates a new AuthorizeCreditCardAmountByProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizeCreditCardAmountByProfileRequestWithDefaults

`func NewAuthorizeCreditCardAmountByProfileRequestWithDefaults() *AuthorizeCreditCardAmountByProfileRequest`

NewAuthorizeCreditCardAmountByProfileRequestWithDefaults instantiates a new AuthorizeCreditCardAmountByProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *AuthorizeCreditCardAmountByProfileRequest) GetCriteria() CCAuthorizationCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *AuthorizeCreditCardAmountByProfileRequest) GetCriteriaOk() (*CCAuthorizationCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *AuthorizeCreditCardAmountByProfileRequest) SetCriteria(v CCAuthorizationCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *AuthorizeCreditCardAmountByProfileRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *AuthorizeCreditCardAmountByProfileRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AuthorizeCreditCardAmountByProfileRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AuthorizeCreditCardAmountByProfileRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AuthorizeCreditCardAmountByProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AuthorizeCreditCardAmountByProfileRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AuthorizeCreditCardAmountByProfileRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AuthorizeCreditCardAmountByProfileRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AuthorizeCreditCardAmountByProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


