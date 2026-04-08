# BillingPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**BillingPaymentCriteria**](BillingPaymentCriteria.md) |  | [optional] 
**AdvanceDeposit** | Pointer to **bool** | Flag to indicate if the advance bill is being posted from deposits prior to check-in | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBillingPayment

`func NewBillingPayment() *BillingPayment`

NewBillingPayment instantiates a new BillingPayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingPaymentWithDefaults

`func NewBillingPaymentWithDefaults() *BillingPayment`

NewBillingPaymentWithDefaults instantiates a new BillingPayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *BillingPayment) GetCriteria() BillingPaymentCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *BillingPayment) GetCriteriaOk() (*BillingPaymentCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *BillingPayment) SetCriteria(v BillingPaymentCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *BillingPayment) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetAdvanceDeposit

`func (o *BillingPayment) GetAdvanceDeposit() bool`

GetAdvanceDeposit returns the AdvanceDeposit field if non-nil, zero value otherwise.

### GetAdvanceDepositOk

`func (o *BillingPayment) GetAdvanceDepositOk() (*bool, bool)`

GetAdvanceDepositOk returns a tuple with the AdvanceDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceDeposit

`func (o *BillingPayment) SetAdvanceDeposit(v bool)`

SetAdvanceDeposit sets AdvanceDeposit field to given value.

### HasAdvanceDeposit

`func (o *BillingPayment) HasAdvanceDeposit() bool`

HasAdvanceDeposit returns a boolean if a field has been set.

### GetLinks

`func (o *BillingPayment) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BillingPayment) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BillingPayment) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BillingPayment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BillingPayment) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BillingPayment) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BillingPayment) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BillingPayment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


