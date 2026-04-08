# FiscalRetryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel where the transaction belongs. | [optional] 
**FolioSeqId** | Pointer to **int32** | Fiscal Folio sequence ID stored in queue table. | [optional] 
**VoidFolioModes** | Pointer to [**VoidFolioModes**](VoidFolioModes.md) |  | [optional] 
**FiscalFolioInstruction** | Pointer to [**FiscalFolioInstruction**](FiscalFolioInstruction.md) |  | [optional] 

## Methods

### NewFiscalRetryType

`func NewFiscalRetryType() *FiscalRetryType`

NewFiscalRetryType instantiates a new FiscalRetryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalRetryTypeWithDefaults

`func NewFiscalRetryTypeWithDefaults() *FiscalRetryType`

NewFiscalRetryTypeWithDefaults instantiates a new FiscalRetryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FiscalRetryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FiscalRetryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FiscalRetryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FiscalRetryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetFolioSeqId

`func (o *FiscalRetryType) GetFolioSeqId() int32`

GetFolioSeqId returns the FolioSeqId field if non-nil, zero value otherwise.

### GetFolioSeqIdOk

`func (o *FiscalRetryType) GetFolioSeqIdOk() (*int32, bool)`

GetFolioSeqIdOk returns a tuple with the FolioSeqId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqId

`func (o *FiscalRetryType) SetFolioSeqId(v int32)`

SetFolioSeqId sets FolioSeqId field to given value.

### HasFolioSeqId

`func (o *FiscalRetryType) HasFolioSeqId() bool`

HasFolioSeqId returns a boolean if a field has been set.

### GetVoidFolioModes

`func (o *FiscalRetryType) GetVoidFolioModes() VoidFolioModes`

GetVoidFolioModes returns the VoidFolioModes field if non-nil, zero value otherwise.

### GetVoidFolioModesOk

`func (o *FiscalRetryType) GetVoidFolioModesOk() (*VoidFolioModes, bool)`

GetVoidFolioModesOk returns a tuple with the VoidFolioModes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoidFolioModes

`func (o *FiscalRetryType) SetVoidFolioModes(v VoidFolioModes)`

SetVoidFolioModes sets VoidFolioModes field to given value.

### HasVoidFolioModes

`func (o *FiscalRetryType) HasVoidFolioModes() bool`

HasVoidFolioModes returns a boolean if a field has been set.

### GetFiscalFolioInstruction

`func (o *FiscalRetryType) GetFiscalFolioInstruction() FiscalFolioInstruction`

GetFiscalFolioInstruction returns the FiscalFolioInstruction field if non-nil, zero value otherwise.

### GetFiscalFolioInstructionOk

`func (o *FiscalRetryType) GetFiscalFolioInstructionOk() (*FiscalFolioInstruction, bool)`

GetFiscalFolioInstructionOk returns a tuple with the FiscalFolioInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInstruction

`func (o *FiscalRetryType) SetFiscalFolioInstruction(v FiscalFolioInstruction)`

SetFiscalFolioInstruction sets FiscalFolioInstruction field to given value.

### HasFiscalFolioInstruction

`func (o *FiscalRetryType) HasFiscalFolioInstruction() bool`

HasFiscalFolioInstruction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


