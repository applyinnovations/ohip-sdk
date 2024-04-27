# FolioPrintersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioTypeName** | Pointer to **string** | Name of the Folio Type. | [optional] 
**Printer** | Pointer to [**[]FolioPrinterType**](FolioPrinterType.md) | Folio Printer Information. | [optional] 

## Methods

### NewFolioPrintersType

`func NewFolioPrintersType() *FolioPrintersType`

NewFolioPrintersType instantiates a new FolioPrintersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioPrintersTypeWithDefaults

`func NewFolioPrintersTypeWithDefaults() *FolioPrintersType`

NewFolioPrintersTypeWithDefaults instantiates a new FolioPrintersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioTypeName

`func (o *FolioPrintersType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *FolioPrintersType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *FolioPrintersType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *FolioPrintersType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetPrinter

`func (o *FolioPrintersType) GetPrinter() []FolioPrinterType`

GetPrinter returns the Printer field if non-nil, zero value otherwise.

### GetPrinterOk

`func (o *FolioPrintersType) GetPrinterOk() (*[]FolioPrinterType, bool)`

GetPrinterOk returns a tuple with the Printer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinter

`func (o *FolioPrintersType) SetPrinter(v []FolioPrinterType)`

SetPrinter sets Printer field to given value.

### HasPrinter

`func (o *FolioPrintersType) HasPrinter() bool`

HasPrinter returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


