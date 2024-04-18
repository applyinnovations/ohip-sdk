# FiscalPartnersDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPartners** | Pointer to [**[]FiscalPartnerType**](FiscalPartnerType.md) | Details of Fiscal Partners. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalPartnersDetails

`func NewFiscalPartnersDetails() *FiscalPartnersDetails`

NewFiscalPartnersDetails instantiates a new FiscalPartnersDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalPartnersDetailsWithDefaults

`func NewFiscalPartnersDetailsWithDefaults() *FiscalPartnersDetails`

NewFiscalPartnersDetailsWithDefaults instantiates a new FiscalPartnersDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPartners

`func (o *FiscalPartnersDetails) GetFiscalPartners() []FiscalPartnerType`

GetFiscalPartners returns the FiscalPartners field if non-nil, zero value otherwise.

### GetFiscalPartnersOk

`func (o *FiscalPartnersDetails) GetFiscalPartnersOk() (*[]FiscalPartnerType, bool)`

GetFiscalPartnersOk returns a tuple with the FiscalPartners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPartners

`func (o *FiscalPartnersDetails) SetFiscalPartners(v []FiscalPartnerType)`

SetFiscalPartners sets FiscalPartners field to given value.

### HasFiscalPartners

`func (o *FiscalPartnersDetails) HasFiscalPartners() bool`

HasFiscalPartners returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalPartnersDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalPartnersDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalPartnersDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalPartnersDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

