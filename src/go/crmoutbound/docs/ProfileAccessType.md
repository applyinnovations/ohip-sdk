# ProfileAccessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CroCode** | Pointer to **string** | Indicates the CRO code where the profile was created | [optional] 
**HotelId** | Pointer to **string** | Indicates the Hotel code where the profile was created | [optional] 
**SharedLevel** | Pointer to [**ProfileSharedLevelType**](ProfileSharedLevelType.md) |  | [optional] 

## Methods

### NewProfileAccessType

`func NewProfileAccessType() *ProfileAccessType`

NewProfileAccessType instantiates a new ProfileAccessType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileAccessTypeWithDefaults

`func NewProfileAccessTypeWithDefaults() *ProfileAccessType`

NewProfileAccessTypeWithDefaults instantiates a new ProfileAccessType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCroCode

`func (o *ProfileAccessType) GetCroCode() string`

GetCroCode returns the CroCode field if non-nil, zero value otherwise.

### GetCroCodeOk

`func (o *ProfileAccessType) GetCroCodeOk() (*string, bool)`

GetCroCodeOk returns a tuple with the CroCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCroCode

`func (o *ProfileAccessType) SetCroCode(v string)`

SetCroCode sets CroCode field to given value.

### HasCroCode

`func (o *ProfileAccessType) HasCroCode() bool`

HasCroCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ProfileAccessType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileAccessType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileAccessType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProfileAccessType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSharedLevel

`func (o *ProfileAccessType) GetSharedLevel() ProfileSharedLevelType`

GetSharedLevel returns the SharedLevel field if non-nil, zero value otherwise.

### GetSharedLevelOk

`func (o *ProfileAccessType) GetSharedLevelOk() (*ProfileSharedLevelType, bool)`

GetSharedLevelOk returns a tuple with the SharedLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedLevel

`func (o *ProfileAccessType) SetSharedLevel(v ProfileSharedLevelType)`

SetSharedLevel sets SharedLevel field to given value.

### HasSharedLevel

`func (o *ProfileAccessType) HasSharedLevel() bool`

HasSharedLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


