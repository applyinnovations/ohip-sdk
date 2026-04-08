# MemberPointToExpireType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PointsExpiryDate** | Pointer to **string** | The date when the member future award points will expire. | [optional] 
**PointsToExpire** | Pointer to **int32** | Displays the total number of points that will expire on the expiration date. | [optional] 
**PreviousPointsToExpire** | Pointer to **int32** | Displays the number of points that are relevant for extension. Points that were already extended from the previous year are not considered for extension. | [optional] 
**Extend** | Pointer to **bool** | Indicates if the points is extendable. | [optional] 
**AwardGenerationMethod** | Pointer to **string** | The method of award generation. | [optional] 

## Methods

### NewMemberPointToExpireType

`func NewMemberPointToExpireType() *MemberPointToExpireType`

NewMemberPointToExpireType instantiates a new MemberPointToExpireType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberPointToExpireTypeWithDefaults

`func NewMemberPointToExpireTypeWithDefaults() *MemberPointToExpireType`

NewMemberPointToExpireTypeWithDefaults instantiates a new MemberPointToExpireType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPointsExpiryDate

`func (o *MemberPointToExpireType) GetPointsExpiryDate() string`

GetPointsExpiryDate returns the PointsExpiryDate field if non-nil, zero value otherwise.

### GetPointsExpiryDateOk

`func (o *MemberPointToExpireType) GetPointsExpiryDateOk() (*string, bool)`

GetPointsExpiryDateOk returns a tuple with the PointsExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsExpiryDate

`func (o *MemberPointToExpireType) SetPointsExpiryDate(v string)`

SetPointsExpiryDate sets PointsExpiryDate field to given value.

### HasPointsExpiryDate

`func (o *MemberPointToExpireType) HasPointsExpiryDate() bool`

HasPointsExpiryDate returns a boolean if a field has been set.

### GetPointsToExpire

`func (o *MemberPointToExpireType) GetPointsToExpire() int32`

GetPointsToExpire returns the PointsToExpire field if non-nil, zero value otherwise.

### GetPointsToExpireOk

`func (o *MemberPointToExpireType) GetPointsToExpireOk() (*int32, bool)`

GetPointsToExpireOk returns a tuple with the PointsToExpire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsToExpire

`func (o *MemberPointToExpireType) SetPointsToExpire(v int32)`

SetPointsToExpire sets PointsToExpire field to given value.

### HasPointsToExpire

`func (o *MemberPointToExpireType) HasPointsToExpire() bool`

HasPointsToExpire returns a boolean if a field has been set.

### GetPreviousPointsToExpire

`func (o *MemberPointToExpireType) GetPreviousPointsToExpire() int32`

GetPreviousPointsToExpire returns the PreviousPointsToExpire field if non-nil, zero value otherwise.

### GetPreviousPointsToExpireOk

`func (o *MemberPointToExpireType) GetPreviousPointsToExpireOk() (*int32, bool)`

GetPreviousPointsToExpireOk returns a tuple with the PreviousPointsToExpire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousPointsToExpire

`func (o *MemberPointToExpireType) SetPreviousPointsToExpire(v int32)`

SetPreviousPointsToExpire sets PreviousPointsToExpire field to given value.

### HasPreviousPointsToExpire

`func (o *MemberPointToExpireType) HasPreviousPointsToExpire() bool`

HasPreviousPointsToExpire returns a boolean if a field has been set.

### GetExtend

`func (o *MemberPointToExpireType) GetExtend() bool`

GetExtend returns the Extend field if non-nil, zero value otherwise.

### GetExtendOk

`func (o *MemberPointToExpireType) GetExtendOk() (*bool, bool)`

GetExtendOk returns a tuple with the Extend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtend

`func (o *MemberPointToExpireType) SetExtend(v bool)`

SetExtend sets Extend field to given value.

### HasExtend

`func (o *MemberPointToExpireType) HasExtend() bool`

HasExtend returns a boolean if a field has been set.

### GetAwardGenerationMethod

`func (o *MemberPointToExpireType) GetAwardGenerationMethod() string`

GetAwardGenerationMethod returns the AwardGenerationMethod field if non-nil, zero value otherwise.

### GetAwardGenerationMethodOk

`func (o *MemberPointToExpireType) GetAwardGenerationMethodOk() (*string, bool)`

GetAwardGenerationMethodOk returns a tuple with the AwardGenerationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardGenerationMethod

`func (o *MemberPointToExpireType) SetAwardGenerationMethod(v string)`

SetAwardGenerationMethod sets AwardGenerationMethod field to given value.

### HasAwardGenerationMethod

`func (o *MemberPointToExpireType) HasAwardGenerationMethod() bool`

HasAwardGenerationMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


