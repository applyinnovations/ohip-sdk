# PostZeroBalanceCheckoutReservationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CheckoutZeroBalanceReservationType**](CheckoutZeroBalanceReservationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostZeroBalanceCheckoutReservationsRequest

`func NewPostZeroBalanceCheckoutReservationsRequest() *PostZeroBalanceCheckoutReservationsRequest`

NewPostZeroBalanceCheckoutReservationsRequest instantiates a new PostZeroBalanceCheckoutReservationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostZeroBalanceCheckoutReservationsRequestWithDefaults

`func NewPostZeroBalanceCheckoutReservationsRequestWithDefaults() *PostZeroBalanceCheckoutReservationsRequest`

NewPostZeroBalanceCheckoutReservationsRequestWithDefaults instantiates a new PostZeroBalanceCheckoutReservationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostZeroBalanceCheckoutReservationsRequest) GetCriteria() CheckoutZeroBalanceReservationType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostZeroBalanceCheckoutReservationsRequest) GetCriteriaOk() (*CheckoutZeroBalanceReservationType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostZeroBalanceCheckoutReservationsRequest) SetCriteria(v CheckoutZeroBalanceReservationType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostZeroBalanceCheckoutReservationsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostZeroBalanceCheckoutReservationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostZeroBalanceCheckoutReservationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostZeroBalanceCheckoutReservationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostZeroBalanceCheckoutReservationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostZeroBalanceCheckoutReservationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostZeroBalanceCheckoutReservationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostZeroBalanceCheckoutReservationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostZeroBalanceCheckoutReservationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


