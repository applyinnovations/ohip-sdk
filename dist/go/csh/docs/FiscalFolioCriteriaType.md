# FiscalFolioCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the folio is being generated. | [optional] 
**FolioCommand** | Pointer to [**FolioCommandType**](FolioCommandType.md) |  | [optional] 
**EffectiveDate** | Pointer to **string** | Effective date to run fiscal command. | [optional] 
**Folios** | Pointer to [**FiscalInvoiceSummaryType**](FiscalInvoiceSummaryType.md) |  | [optional] 

## Methods

### NewFiscalFolioCriteriaType

`func NewFiscalFolioCriteriaType() *FiscalFolioCriteriaType`

NewFiscalFolioCriteriaType instantiates a new FiscalFolioCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalFolioCriteriaTypeWithDefaults

`func NewFiscalFolioCriteriaTypeWithDefaults() *FiscalFolioCriteriaType`

NewFiscalFolioCriteriaTypeWithDefaults instantiates a new FiscalFolioCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FiscalFolioCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FiscalFolioCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FiscalFolioCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FiscalFolioCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetFolioCommand

`func (o *FiscalFolioCriteriaType) GetFolioCommand() FolioCommandType`

GetFolioCommand returns the FolioCommand field if non-nil, zero value otherwise.

### GetFolioCommandOk

`func (o *FiscalFolioCriteriaType) GetFolioCommandOk() (*FolioCommandType, bool)`

GetFolioCommandOk returns a tuple with the FolioCommand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioCommand

`func (o *FiscalFolioCriteriaType) SetFolioCommand(v FolioCommandType)`

SetFolioCommand sets FolioCommand field to given value.

### HasFolioCommand

`func (o *FiscalFolioCriteriaType) HasFolioCommand() bool`

HasFolioCommand returns a boolean if a field has been set.

### GetEffectiveDate

`func (o *FiscalFolioCriteriaType) GetEffectiveDate() string`

GetEffectiveDate returns the EffectiveDate field if non-nil, zero value otherwise.

### GetEffectiveDateOk

`func (o *FiscalFolioCriteriaType) GetEffectiveDateOk() (*string, bool)`

GetEffectiveDateOk returns a tuple with the EffectiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveDate

`func (o *FiscalFolioCriteriaType) SetEffectiveDate(v string)`

SetEffectiveDate sets EffectiveDate field to given value.

### HasEffectiveDate

`func (o *FiscalFolioCriteriaType) HasEffectiveDate() bool`

HasEffectiveDate returns a boolean if a field has been set.

### GetFolios

`func (o *FiscalFolioCriteriaType) GetFolios() FiscalInvoiceSummaryType`

GetFolios returns the Folios field if non-nil, zero value otherwise.

### GetFoliosOk

`func (o *FiscalFolioCriteriaType) GetFoliosOk() (*FiscalInvoiceSummaryType, bool)`

GetFoliosOk returns a tuple with the Folios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolios

`func (o *FiscalFolioCriteriaType) SetFolios(v FiscalInvoiceSummaryType)`

SetFolios sets Folios field to given value.

### HasFolios

`func (o *FiscalFolioCriteriaType) HasFolios() bool`

HasFolios returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


