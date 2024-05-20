# CopyFunctionSpaceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceHotelCode** | Pointer to **string** | Hotel code of source function space that will serve as the basis for the target function spaces. | [optional] 
**SourceRoomNumber** | Pointer to **string** | Room number of source function space that will serve as the basis for the target function spaces. | [optional] 
**TargetFunctionSpace** | Pointer to [**[]TargetFunctionSpaceType**](TargetFunctionSpaceType.md) | Function Space details that may differ from the source function space. | [optional] 

## Methods

### NewCopyFunctionSpaceType

`func NewCopyFunctionSpaceType() *CopyFunctionSpaceType`

NewCopyFunctionSpaceType instantiates a new CopyFunctionSpaceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyFunctionSpaceTypeWithDefaults

`func NewCopyFunctionSpaceTypeWithDefaults() *CopyFunctionSpaceType`

NewCopyFunctionSpaceTypeWithDefaults instantiates a new CopyFunctionSpaceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceHotelCode

`func (o *CopyFunctionSpaceType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *CopyFunctionSpaceType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *CopyFunctionSpaceType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *CopyFunctionSpaceType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.

### GetSourceRoomNumber

`func (o *CopyFunctionSpaceType) GetSourceRoomNumber() string`

GetSourceRoomNumber returns the SourceRoomNumber field if non-nil, zero value otherwise.

### GetSourceRoomNumberOk

`func (o *CopyFunctionSpaceType) GetSourceRoomNumberOk() (*string, bool)`

GetSourceRoomNumberOk returns a tuple with the SourceRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRoomNumber

`func (o *CopyFunctionSpaceType) SetSourceRoomNumber(v string)`

SetSourceRoomNumber sets SourceRoomNumber field to given value.

### HasSourceRoomNumber

`func (o *CopyFunctionSpaceType) HasSourceRoomNumber() bool`

HasSourceRoomNumber returns a boolean if a field has been set.

### GetTargetFunctionSpace

`func (o *CopyFunctionSpaceType) GetTargetFunctionSpace() []TargetFunctionSpaceType`

GetTargetFunctionSpace returns the TargetFunctionSpace field if non-nil, zero value otherwise.

### GetTargetFunctionSpaceOk

`func (o *CopyFunctionSpaceType) GetTargetFunctionSpaceOk() (*[]TargetFunctionSpaceType, bool)`

GetTargetFunctionSpaceOk returns a tuple with the TargetFunctionSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFunctionSpace

`func (o *CopyFunctionSpaceType) SetTargetFunctionSpace(v []TargetFunctionSpaceType)`

SetTargetFunctionSpace sets TargetFunctionSpace field to given value.

### HasTargetFunctionSpace

`func (o *CopyFunctionSpaceType) HasTargetFunctionSpace() bool`

HasTargetFunctionSpace returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


