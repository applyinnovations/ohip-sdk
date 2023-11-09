# PostOverrideReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverrideReasons** | Pointer to [**RoomRotationOverrideReasonsType**](RoomRotationOverrideReasonsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostOverrideReasonsRequest

`func NewPostOverrideReasonsRequest() *PostOverrideReasonsRequest`

NewPostOverrideReasonsRequest instantiates a new PostOverrideReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostOverrideReasonsRequestWithDefaults

`func NewPostOverrideReasonsRequestWithDefaults() *PostOverrideReasonsRequest`

NewPostOverrideReasonsRequestWithDefaults instantiates a new PostOverrideReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverrideReasons

`func (o *PostOverrideReasonsRequest) GetOverrideReasons() RoomRotationOverrideReasonsType`

GetOverrideReasons returns the OverrideReasons field if non-nil, zero value otherwise.

### GetOverrideReasonsOk

`func (o *PostOverrideReasonsRequest) GetOverrideReasonsOk() (*RoomRotationOverrideReasonsType, bool)`

GetOverrideReasonsOk returns a tuple with the OverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideReasons

`func (o *PostOverrideReasonsRequest) SetOverrideReasons(v RoomRotationOverrideReasonsType)`

SetOverrideReasons sets OverrideReasons field to given value.

### HasOverrideReasons

`func (o *PostOverrideReasonsRequest) HasOverrideReasons() bool`

HasOverrideReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PostOverrideReasonsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostOverrideReasonsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostOverrideReasonsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostOverrideReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


