# FiscalCommandsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPartners** | Pointer to [**[]FiscalCommandType**](FiscalCommandType.md) | List of FiscalCommands. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalCommandsDetails

`func NewFiscalCommandsDetails() *FiscalCommandsDetails`

NewFiscalCommandsDetails instantiates a new FiscalCommandsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalCommandsDetailsWithDefaults

`func NewFiscalCommandsDetailsWithDefaults() *FiscalCommandsDetails`

NewFiscalCommandsDetailsWithDefaults instantiates a new FiscalCommandsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPartners

`func (o *FiscalCommandsDetails) GetFiscalPartners() []FiscalCommandType`

GetFiscalPartners returns the FiscalPartners field if non-nil, zero value otherwise.

### GetFiscalPartnersOk

`func (o *FiscalCommandsDetails) GetFiscalPartnersOk() (*[]FiscalCommandType, bool)`

GetFiscalPartnersOk returns a tuple with the FiscalPartners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPartners

`func (o *FiscalCommandsDetails) SetFiscalPartners(v []FiscalCommandType)`

SetFiscalPartners sets FiscalPartners field to given value.

### HasFiscalPartners

`func (o *FiscalCommandsDetails) HasFiscalPartners() bool`

HasFiscalPartners returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalCommandsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalCommandsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalCommandsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalCommandsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


