# RegisterManualAuthorizationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CCManualAuthorizationCriteriaType**](CCManualAuthorizationCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRegisterManualAuthorizationRequest

`func NewRegisterManualAuthorizationRequest() *RegisterManualAuthorizationRequest`

NewRegisterManualAuthorizationRequest instantiates a new RegisterManualAuthorizationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegisterManualAuthorizationRequestWithDefaults

`func NewRegisterManualAuthorizationRequestWithDefaults() *RegisterManualAuthorizationRequest`

NewRegisterManualAuthorizationRequestWithDefaults instantiates a new RegisterManualAuthorizationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *RegisterManualAuthorizationRequest) GetCriteria() CCManualAuthorizationCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RegisterManualAuthorizationRequest) GetCriteriaOk() (*CCManualAuthorizationCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RegisterManualAuthorizationRequest) SetCriteria(v CCManualAuthorizationCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *RegisterManualAuthorizationRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *RegisterManualAuthorizationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RegisterManualAuthorizationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RegisterManualAuthorizationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RegisterManualAuthorizationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RegisterManualAuthorizationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RegisterManualAuthorizationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RegisterManualAuthorizationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RegisterManualAuthorizationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


