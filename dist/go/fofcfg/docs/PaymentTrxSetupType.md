# PaymentTrxSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Usage** | Pointer to [**PaymentTrxUsageType**](PaymentTrxUsageType.md) |  | [optional] 
**Card** | Pointer to [**CardPaymentTrxSetupType**](CardPaymentTrxSetupType.md) |  | [optional] 
**IRS8300Reporting** | Pointer to **bool** | True indicates the Transaction Code payment will be reposted to IRS according to the rule specified by IRS. | [optional] 
**RoundingFactor** | Pointer to **bool** | True indicates the Transaction Code posting will have a rounding effect. | [optional] 
**GenerateTaxInvoice** | Pointer to **bool** | Indicates if the Transaction Code payment will generate a Tax Invoice at the time of making a payment. Tax Invoices are used in Thailand. | [optional] 
**PaymentType** | Pointer to [**PaymentTrxCodeTypeType**](PaymentTrxCodeTypeType.md) |  | [optional] 

## Methods

### NewPaymentTrxSetupType

`func NewPaymentTrxSetupType() *PaymentTrxSetupType`

NewPaymentTrxSetupType instantiates a new PaymentTrxSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentTrxSetupTypeWithDefaults

`func NewPaymentTrxSetupTypeWithDefaults() *PaymentTrxSetupType`

NewPaymentTrxSetupTypeWithDefaults instantiates a new PaymentTrxSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsage

`func (o *PaymentTrxSetupType) GetUsage() PaymentTrxUsageType`

GetUsage returns the Usage field if non-nil, zero value otherwise.

### GetUsageOk

`func (o *PaymentTrxSetupType) GetUsageOk() (*PaymentTrxUsageType, bool)`

GetUsageOk returns a tuple with the Usage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsage

`func (o *PaymentTrxSetupType) SetUsage(v PaymentTrxUsageType)`

SetUsage sets Usage field to given value.

### HasUsage

`func (o *PaymentTrxSetupType) HasUsage() bool`

HasUsage returns a boolean if a field has been set.

### GetCard

`func (o *PaymentTrxSetupType) GetCard() CardPaymentTrxSetupType`

GetCard returns the Card field if non-nil, zero value otherwise.

### GetCardOk

`func (o *PaymentTrxSetupType) GetCardOk() (*CardPaymentTrxSetupType, bool)`

GetCardOk returns a tuple with the Card field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCard

`func (o *PaymentTrxSetupType) SetCard(v CardPaymentTrxSetupType)`

SetCard sets Card field to given value.

### HasCard

`func (o *PaymentTrxSetupType) HasCard() bool`

HasCard returns a boolean if a field has been set.

### GetIRS8300Reporting

`func (o *PaymentTrxSetupType) GetIRS8300Reporting() bool`

GetIRS8300Reporting returns the IRS8300Reporting field if non-nil, zero value otherwise.

### GetIRS8300ReportingOk

`func (o *PaymentTrxSetupType) GetIRS8300ReportingOk() (*bool, bool)`

GetIRS8300ReportingOk returns a tuple with the IRS8300Reporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIRS8300Reporting

`func (o *PaymentTrxSetupType) SetIRS8300Reporting(v bool)`

SetIRS8300Reporting sets IRS8300Reporting field to given value.

### HasIRS8300Reporting

`func (o *PaymentTrxSetupType) HasIRS8300Reporting() bool`

HasIRS8300Reporting returns a boolean if a field has been set.

### GetRoundingFactor

`func (o *PaymentTrxSetupType) GetRoundingFactor() bool`

GetRoundingFactor returns the RoundingFactor field if non-nil, zero value otherwise.

### GetRoundingFactorOk

`func (o *PaymentTrxSetupType) GetRoundingFactorOk() (*bool, bool)`

GetRoundingFactorOk returns a tuple with the RoundingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingFactor

`func (o *PaymentTrxSetupType) SetRoundingFactor(v bool)`

SetRoundingFactor sets RoundingFactor field to given value.

### HasRoundingFactor

`func (o *PaymentTrxSetupType) HasRoundingFactor() bool`

HasRoundingFactor returns a boolean if a field has been set.

### GetGenerateTaxInvoice

`func (o *PaymentTrxSetupType) GetGenerateTaxInvoice() bool`

GetGenerateTaxInvoice returns the GenerateTaxInvoice field if non-nil, zero value otherwise.

### GetGenerateTaxInvoiceOk

`func (o *PaymentTrxSetupType) GetGenerateTaxInvoiceOk() (*bool, bool)`

GetGenerateTaxInvoiceOk returns a tuple with the GenerateTaxInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateTaxInvoice

`func (o *PaymentTrxSetupType) SetGenerateTaxInvoice(v bool)`

SetGenerateTaxInvoice sets GenerateTaxInvoice field to given value.

### HasGenerateTaxInvoice

`func (o *PaymentTrxSetupType) HasGenerateTaxInvoice() bool`

HasGenerateTaxInvoice returns a boolean if a field has been set.

### GetPaymentType

`func (o *PaymentTrxSetupType) GetPaymentType() PaymentTrxCodeTypeType`

GetPaymentType returns the PaymentType field if non-nil, zero value otherwise.

### GetPaymentTypeOk

`func (o *PaymentTrxSetupType) GetPaymentTypeOk() (*PaymentTrxCodeTypeType, bool)`

GetPaymentTypeOk returns a tuple with the PaymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentType

`func (o *PaymentTrxSetupType) SetPaymentType(v PaymentTrxCodeTypeType)`

SetPaymentType sets PaymentType field to given value.

### HasPaymentType

`func (o *PaymentTrxSetupType) HasPaymentType() bool`

HasPaymentType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


