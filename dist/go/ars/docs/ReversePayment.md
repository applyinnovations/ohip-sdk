# ReversePayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArPayment** | Pointer to [**ReversePaymentCriteriaType**](ReversePaymentCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReversePayment

`func NewReversePayment() *ReversePayment`

NewReversePayment instantiates a new ReversePayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReversePaymentWithDefaults

`func NewReversePaymentWithDefaults() *ReversePayment`

NewReversePaymentWithDefaults instantiates a new ReversePayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArPayment

`func (o *ReversePayment) GetArPayment() ReversePaymentCriteriaType`

GetArPayment returns the ArPayment field if non-nil, zero value otherwise.

### GetArPaymentOk

`func (o *ReversePayment) GetArPaymentOk() (*ReversePaymentCriteriaType, bool)`

GetArPaymentOk returns a tuple with the ArPayment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArPayment

`func (o *ReversePayment) SetArPayment(v ReversePaymentCriteriaType)`

SetArPayment sets ArPayment field to given value.

### HasArPayment

`func (o *ReversePayment) HasArPayment() bool`

HasArPayment returns a boolean if a field has been set.

### GetLinks

`func (o *ReversePayment) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReversePayment) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReversePayment) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReversePayment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReversePayment) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReversePayment) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReversePayment) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReversePayment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


