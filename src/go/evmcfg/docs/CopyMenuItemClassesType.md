# CopyMenuItemClassesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInstructions** | Pointer to [**CopyMenuItemClassesTypeCopyInstructions**](CopyMenuItemClassesTypeCopyInstructions.md) |  | [optional] 
**ItemClasses** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**SourceHotelCode** | Pointer to **string** | Source Hotel code from where menu item classes needs to be copied | [optional] 
**TargetHotelCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 

## Methods

### NewCopyMenuItemClassesType

`func NewCopyMenuItemClassesType() *CopyMenuItemClassesType`

NewCopyMenuItemClassesType instantiates a new CopyMenuItemClassesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyMenuItemClassesTypeWithDefaults

`func NewCopyMenuItemClassesTypeWithDefaults() *CopyMenuItemClassesType`

NewCopyMenuItemClassesTypeWithDefaults instantiates a new CopyMenuItemClassesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInstructions

`func (o *CopyMenuItemClassesType) GetCopyInstructions() CopyMenuItemClassesTypeCopyInstructions`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *CopyMenuItemClassesType) GetCopyInstructionsOk() (*CopyMenuItemClassesTypeCopyInstructions, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *CopyMenuItemClassesType) SetCopyInstructions(v CopyMenuItemClassesTypeCopyInstructions)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *CopyMenuItemClassesType) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetItemClasses

`func (o *CopyMenuItemClassesType) GetItemClasses() UniqueIDListType`

GetItemClasses returns the ItemClasses field if non-nil, zero value otherwise.

### GetItemClassesOk

`func (o *CopyMenuItemClassesType) GetItemClassesOk() (*UniqueIDListType, bool)`

GetItemClassesOk returns a tuple with the ItemClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClasses

`func (o *CopyMenuItemClassesType) SetItemClasses(v UniqueIDListType)`

SetItemClasses sets ItemClasses field to given value.

### HasItemClasses

`func (o *CopyMenuItemClassesType) HasItemClasses() bool`

HasItemClasses returns a boolean if a field has been set.

### GetSourceHotelCode

`func (o *CopyMenuItemClassesType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *CopyMenuItemClassesType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *CopyMenuItemClassesType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *CopyMenuItemClassesType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.

### GetTargetHotelCodes

`func (o *CopyMenuItemClassesType) GetTargetHotelCodes() CodeListType`

GetTargetHotelCodes returns the TargetHotelCodes field if non-nil, zero value otherwise.

### GetTargetHotelCodesOk

`func (o *CopyMenuItemClassesType) GetTargetHotelCodesOk() (*CodeListType, bool)`

GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCodes

`func (o *CopyMenuItemClassesType) SetTargetHotelCodes(v CodeListType)`

SetTargetHotelCodes sets TargetHotelCodes field to given value.

### HasTargetHotelCodes

`func (o *CopyMenuItemClassesType) HasTargetHotelCodes() bool`

HasTargetHotelCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


