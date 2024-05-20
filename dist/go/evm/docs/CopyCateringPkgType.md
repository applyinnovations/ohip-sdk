# CopyCateringPkgType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Continue** | Pointer to **bool** | Indicates wether to to continue upon getting error processing screen. If this is true, error processing screen won&#39;t be shown. | [optional] 
**CopyAsSnapshot** | Pointer to **bool** | Indicates wether to perform pre-cahnge or post-change snapshot of the copied events. By default, it is always considered as false and will provide post-change snapshot. | [optional] 
**CopyInstructions** | Pointer to [**[]CateringPackageCopyInstructionType**](CateringPackageCopyInstructionType.md) | Indicate weather to include Non Package resources, source status etc. | [optional] 
**CopyStatusMode** | Pointer to [**CopyStatusModeType**](CopyStatusModeType.md) |  | [optional] 
**CopyToDates** | Pointer to **[]string** | Specifies a single date. | [optional] 
**HotelId** | Pointer to **string** | Hotel code where the package will be copied. | [optional] 
**PackageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**SourceBlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TargetBlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewCopyCateringPkgType

`func NewCopyCateringPkgType() *CopyCateringPkgType`

NewCopyCateringPkgType instantiates a new CopyCateringPkgType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringPkgTypeWithDefaults

`func NewCopyCateringPkgTypeWithDefaults() *CopyCateringPkgType`

NewCopyCateringPkgTypeWithDefaults instantiates a new CopyCateringPkgType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContinue

`func (o *CopyCateringPkgType) GetContinue() bool`

GetContinue returns the Continue field if non-nil, zero value otherwise.

### GetContinueOk

`func (o *CopyCateringPkgType) GetContinueOk() (*bool, bool)`

GetContinueOk returns a tuple with the Continue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinue

`func (o *CopyCateringPkgType) SetContinue(v bool)`

SetContinue sets Continue field to given value.

### HasContinue

`func (o *CopyCateringPkgType) HasContinue() bool`

HasContinue returns a boolean if a field has been set.

### GetCopyAsSnapshot

`func (o *CopyCateringPkgType) GetCopyAsSnapshot() bool`

GetCopyAsSnapshot returns the CopyAsSnapshot field if non-nil, zero value otherwise.

### GetCopyAsSnapshotOk

`func (o *CopyCateringPkgType) GetCopyAsSnapshotOk() (*bool, bool)`

GetCopyAsSnapshotOk returns a tuple with the CopyAsSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyAsSnapshot

`func (o *CopyCateringPkgType) SetCopyAsSnapshot(v bool)`

SetCopyAsSnapshot sets CopyAsSnapshot field to given value.

### HasCopyAsSnapshot

`func (o *CopyCateringPkgType) HasCopyAsSnapshot() bool`

HasCopyAsSnapshot returns a boolean if a field has been set.

### GetCopyInstructions

`func (o *CopyCateringPkgType) GetCopyInstructions() []CateringPackageCopyInstructionType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *CopyCateringPkgType) GetCopyInstructionsOk() (*[]CateringPackageCopyInstructionType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *CopyCateringPkgType) SetCopyInstructions(v []CateringPackageCopyInstructionType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *CopyCateringPkgType) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetCopyStatusMode

`func (o *CopyCateringPkgType) GetCopyStatusMode() CopyStatusModeType`

GetCopyStatusMode returns the CopyStatusMode field if non-nil, zero value otherwise.

### GetCopyStatusModeOk

`func (o *CopyCateringPkgType) GetCopyStatusModeOk() (*CopyStatusModeType, bool)`

GetCopyStatusModeOk returns a tuple with the CopyStatusMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyStatusMode

`func (o *CopyCateringPkgType) SetCopyStatusMode(v CopyStatusModeType)`

SetCopyStatusMode sets CopyStatusMode field to given value.

### HasCopyStatusMode

`func (o *CopyCateringPkgType) HasCopyStatusMode() bool`

HasCopyStatusMode returns a boolean if a field has been set.

### GetCopyToDates

`func (o *CopyCateringPkgType) GetCopyToDates() []string`

GetCopyToDates returns the CopyToDates field if non-nil, zero value otherwise.

### GetCopyToDatesOk

`func (o *CopyCateringPkgType) GetCopyToDatesOk() (*[]string, bool)`

GetCopyToDatesOk returns a tuple with the CopyToDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyToDates

`func (o *CopyCateringPkgType) SetCopyToDates(v []string)`

SetCopyToDates sets CopyToDates field to given value.

### HasCopyToDates

`func (o *CopyCateringPkgType) HasCopyToDates() bool`

HasCopyToDates returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyCateringPkgType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyCateringPkgType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyCateringPkgType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyCateringPkgType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPackageId

`func (o *CopyCateringPkgType) GetPackageId() UniqueIDType`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *CopyCateringPkgType) GetPackageIdOk() (*UniqueIDType, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *CopyCateringPkgType) SetPackageId(v UniqueIDType)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *CopyCateringPkgType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetSourceBlockId

`func (o *CopyCateringPkgType) GetSourceBlockId() UniqueIDType`

GetSourceBlockId returns the SourceBlockId field if non-nil, zero value otherwise.

### GetSourceBlockIdOk

`func (o *CopyCateringPkgType) GetSourceBlockIdOk() (*UniqueIDType, bool)`

GetSourceBlockIdOk returns a tuple with the SourceBlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBlockId

`func (o *CopyCateringPkgType) SetSourceBlockId(v UniqueIDType)`

SetSourceBlockId sets SourceBlockId field to given value.

### HasSourceBlockId

`func (o *CopyCateringPkgType) HasSourceBlockId() bool`

HasSourceBlockId returns a boolean if a field has been set.

### GetTargetBlockId

`func (o *CopyCateringPkgType) GetTargetBlockId() UniqueIDType`

GetTargetBlockId returns the TargetBlockId field if non-nil, zero value otherwise.

### GetTargetBlockIdOk

`func (o *CopyCateringPkgType) GetTargetBlockIdOk() (*UniqueIDType, bool)`

GetTargetBlockIdOk returns a tuple with the TargetBlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetBlockId

`func (o *CopyCateringPkgType) SetTargetBlockId(v UniqueIDType)`

SetTargetBlockId sets TargetBlockId field to given value.

### HasTargetBlockId

`func (o *CopyCateringPkgType) HasTargetBlockId() bool`

HasTargetBlockId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


