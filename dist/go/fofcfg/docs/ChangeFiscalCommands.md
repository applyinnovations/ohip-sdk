# ChangeFiscalCommands

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPartners** | Pointer to [**[]FiscalCommandType**](FiscalCommandType.md) | List of FiscalCommands. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeFiscalCommands

`func NewChangeFiscalCommands() *ChangeFiscalCommands`

NewChangeFiscalCommands instantiates a new ChangeFiscalCommands object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeFiscalCommandsWithDefaults

`func NewChangeFiscalCommandsWithDefaults() *ChangeFiscalCommands`

NewChangeFiscalCommandsWithDefaults instantiates a new ChangeFiscalCommands object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPartners

`func (o *ChangeFiscalCommands) GetFiscalPartners() []FiscalCommandType`

GetFiscalPartners returns the FiscalPartners field if non-nil, zero value otherwise.

### GetFiscalPartnersOk

`func (o *ChangeFiscalCommands) GetFiscalPartnersOk() (*[]FiscalCommandType, bool)`

GetFiscalPartnersOk returns a tuple with the FiscalPartners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPartners

`func (o *ChangeFiscalCommands) SetFiscalPartners(v []FiscalCommandType)`

SetFiscalPartners sets FiscalPartners field to given value.

### HasFiscalPartners

`func (o *ChangeFiscalCommands) HasFiscalPartners() bool`

HasFiscalPartners returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeFiscalCommands) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeFiscalCommands) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeFiscalCommands) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeFiscalCommands) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


