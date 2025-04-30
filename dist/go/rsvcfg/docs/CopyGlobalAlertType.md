# CopyGlobalAlertType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResvAlertIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TargetHotelCodes** | Pointer to **[]string** |  | [optional] 

## Methods

### NewCopyGlobalAlertType

`func NewCopyGlobalAlertType() *CopyGlobalAlertType`

NewCopyGlobalAlertType instantiates a new CopyGlobalAlertType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyGlobalAlertTypeWithDefaults

`func NewCopyGlobalAlertTypeWithDefaults() *CopyGlobalAlertType`

NewCopyGlobalAlertTypeWithDefaults instantiates a new CopyGlobalAlertType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResvAlertIds

`func (o *CopyGlobalAlertType) GetResvAlertIds() []UniqueIDType`

GetResvAlertIds returns the ResvAlertIds field if non-nil, zero value otherwise.

### GetResvAlertIdsOk

`func (o *CopyGlobalAlertType) GetResvAlertIdsOk() (*[]UniqueIDType, bool)`

GetResvAlertIdsOk returns a tuple with the ResvAlertIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvAlertIds

`func (o *CopyGlobalAlertType) SetResvAlertIds(v []UniqueIDType)`

SetResvAlertIds sets ResvAlertIds field to given value.

### HasResvAlertIds

`func (o *CopyGlobalAlertType) HasResvAlertIds() bool`

HasResvAlertIds returns a boolean if a field has been set.

### GetTargetHotelCodes

`func (o *CopyGlobalAlertType) GetTargetHotelCodes() []string`

GetTargetHotelCodes returns the TargetHotelCodes field if non-nil, zero value otherwise.

### GetTargetHotelCodesOk

`func (o *CopyGlobalAlertType) GetTargetHotelCodesOk() (*[]string, bool)`

GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCodes

`func (o *CopyGlobalAlertType) SetTargetHotelCodes(v []string)`

SetTargetHotelCodes sets TargetHotelCodes field to given value.

### HasTargetHotelCodes

`func (o *CopyGlobalAlertType) HasTargetHotelCodes() bool`

HasTargetHotelCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


