# ChangeFiscalPartners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPartners** | Pointer to [**[]FiscalPartnerType**](FiscalPartnerType.md) | Details of Fiscal Partners. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeFiscalPartners

`func NewChangeFiscalPartners() *ChangeFiscalPartners`

NewChangeFiscalPartners instantiates a new ChangeFiscalPartners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeFiscalPartnersWithDefaults

`func NewChangeFiscalPartnersWithDefaults() *ChangeFiscalPartners`

NewChangeFiscalPartnersWithDefaults instantiates a new ChangeFiscalPartners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPartners

`func (o *ChangeFiscalPartners) GetFiscalPartners() []FiscalPartnerType`

GetFiscalPartners returns the FiscalPartners field if non-nil, zero value otherwise.

### GetFiscalPartnersOk

`func (o *ChangeFiscalPartners) GetFiscalPartnersOk() (*[]FiscalPartnerType, bool)`

GetFiscalPartnersOk returns a tuple with the FiscalPartners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPartners

`func (o *ChangeFiscalPartners) SetFiscalPartners(v []FiscalPartnerType)`

SetFiscalPartners sets FiscalPartners field to given value.

### HasFiscalPartners

`func (o *ChangeFiscalPartners) HasFiscalPartners() bool`

HasFiscalPartners returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeFiscalPartners) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeFiscalPartners) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeFiscalPartners) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeFiscalPartners) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


