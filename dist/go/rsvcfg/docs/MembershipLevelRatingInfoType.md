# MembershipLevelRatingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code of the membership level. | [optional] 
**MembershipType** | Pointer to **string** | Membership type of the membership level. | [optional] 
**MembershipLevel** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Rating** | Pointer to **int32** | The desired rating for membership level, up to 4 numeric values. | [optional] 

## Methods

### NewMembershipLevelRatingInfoType

`func NewMembershipLevelRatingInfoType() *MembershipLevelRatingInfoType`

NewMembershipLevelRatingInfoType instantiates a new MembershipLevelRatingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipLevelRatingInfoTypeWithDefaults

`func NewMembershipLevelRatingInfoTypeWithDefaults() *MembershipLevelRatingInfoType`

NewMembershipLevelRatingInfoTypeWithDefaults instantiates a new MembershipLevelRatingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *MembershipLevelRatingInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipLevelRatingInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipLevelRatingInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipLevelRatingInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipLevelRatingInfoType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipLevelRatingInfoType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipLevelRatingInfoType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipLevelRatingInfoType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipLevelRatingInfoType) GetMembershipLevel() CodeDescriptionType`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipLevelRatingInfoType) GetMembershipLevelOk() (*CodeDescriptionType, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipLevelRatingInfoType) SetMembershipLevel(v CodeDescriptionType)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipLevelRatingInfoType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetRating

`func (o *MembershipLevelRatingInfoType) GetRating() int32`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *MembershipLevelRatingInfoType) GetRatingOk() (*int32, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *MembershipLevelRatingInfoType) SetRating(v int32)`

SetRating sets Rating field to given value.

### HasRating

`func (o *MembershipLevelRatingInfoType) HasRating() bool`

HasRating returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


