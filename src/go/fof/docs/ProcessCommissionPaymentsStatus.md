# ProcessCommissionPaymentsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PaymentReport** | Pointer to [**CommissionPaymentReportType**](CommissionPaymentReportType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewProcessCommissionPaymentsStatus

`func NewProcessCommissionPaymentsStatus() *ProcessCommissionPaymentsStatus`

NewProcessCommissionPaymentsStatus instantiates a new ProcessCommissionPaymentsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessCommissionPaymentsStatusWithDefaults

`func NewProcessCommissionPaymentsStatusWithDefaults() *ProcessCommissionPaymentsStatus`

NewProcessCommissionPaymentsStatusWithDefaults instantiates a new ProcessCommissionPaymentsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ProcessCommissionPaymentsStatus) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProcessCommissionPaymentsStatus) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProcessCommissionPaymentsStatus) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProcessCommissionPaymentsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPaymentReport

`func (o *ProcessCommissionPaymentsStatus) GetPaymentReport() CommissionPaymentReportType`

GetPaymentReport returns the PaymentReport field if non-nil, zero value otherwise.

### GetPaymentReportOk

`func (o *ProcessCommissionPaymentsStatus) GetPaymentReportOk() (*CommissionPaymentReportType, bool)`

GetPaymentReportOk returns a tuple with the PaymentReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentReport

`func (o *ProcessCommissionPaymentsStatus) SetPaymentReport(v CommissionPaymentReportType)`

SetPaymentReport sets PaymentReport field to given value.

### HasPaymentReport

`func (o *ProcessCommissionPaymentsStatus) HasPaymentReport() bool`

HasPaymentReport returns a boolean if a field has been set.

### GetWarnings

`func (o *ProcessCommissionPaymentsStatus) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProcessCommissionPaymentsStatus) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProcessCommissionPaymentsStatus) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProcessCommissionPaymentsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


