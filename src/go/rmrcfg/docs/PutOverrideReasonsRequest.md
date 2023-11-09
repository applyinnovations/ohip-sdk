# PutOverrideReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverrideReasons** | Pointer to [**RoomRotationOverrideReasonsType**](RoomRotationOverrideReasonsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutOverrideReasonsRequest

`func NewPutOverrideReasonsRequest() *PutOverrideReasonsRequest`

NewPutOverrideReasonsRequest instantiates a new PutOverrideReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutOverrideReasonsRequestWithDefaults

`func NewPutOverrideReasonsRequestWithDefaults() *PutOverrideReasonsRequest`

NewPutOverrideReasonsRequestWithDefaults instantiates a new PutOverrideReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverrideReasons

`func (o *PutOverrideReasonsRequest) GetOverrideReasons() RoomRotationOverrideReasonsType`

GetOverrideReasons returns the OverrideReasons field if non-nil, zero value otherwise.

### GetOverrideReasonsOk

`func (o *PutOverrideReasonsRequest) GetOverrideReasonsOk() (*RoomRotationOverrideReasonsType, bool)`

GetOverrideReasonsOk returns a tuple with the OverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideReasons

`func (o *PutOverrideReasonsRequest) SetOverrideReasons(v RoomRotationOverrideReasonsType)`

SetOverrideReasons sets OverrideReasons field to given value.

### HasOverrideReasons

`func (o *PutOverrideReasonsRequest) HasOverrideReasons() bool`

HasOverrideReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PutOverrideReasonsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutOverrideReasonsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutOverrideReasonsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutOverrideReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


