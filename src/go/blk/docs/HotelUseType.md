# HotelUseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRestrictions** | Pointer to [**AccessRestrictionsType**](AccessRestrictionsType.md) |  | [optional] 
**HotelUseOnly** | Pointer to **bool** | Indicates whether this business block can be updated only by the Hotel to which it belongs. This is used to communicate to CRO that the business block can be only updated by the Hotel. | [optional] 
**HotelUseReason** | Pointer to **string** | Explains the reason why the business block can be updated only by the Hotel. | [optional] 

## Methods

### NewHotelUseType

`func NewHotelUseType() *HotelUseType`

NewHotelUseType instantiates a new HotelUseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelUseTypeWithDefaults

`func NewHotelUseTypeWithDefaults() *HotelUseType`

NewHotelUseTypeWithDefaults instantiates a new HotelUseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRestrictions

`func (o *HotelUseType) GetAccessRestrictions() AccessRestrictionsType`

GetAccessRestrictions returns the AccessRestrictions field if non-nil, zero value otherwise.

### GetAccessRestrictionsOk

`func (o *HotelUseType) GetAccessRestrictionsOk() (*AccessRestrictionsType, bool)`

GetAccessRestrictionsOk returns a tuple with the AccessRestrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRestrictions

`func (o *HotelUseType) SetAccessRestrictions(v AccessRestrictionsType)`

SetAccessRestrictions sets AccessRestrictions field to given value.

### HasAccessRestrictions

`func (o *HotelUseType) HasAccessRestrictions() bool`

HasAccessRestrictions returns a boolean if a field has been set.

### GetHotelUseOnly

`func (o *HotelUseType) GetHotelUseOnly() bool`

GetHotelUseOnly returns the HotelUseOnly field if non-nil, zero value otherwise.

### GetHotelUseOnlyOk

`func (o *HotelUseType) GetHotelUseOnlyOk() (*bool, bool)`

GetHotelUseOnlyOk returns a tuple with the HotelUseOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelUseOnly

`func (o *HotelUseType) SetHotelUseOnly(v bool)`

SetHotelUseOnly sets HotelUseOnly field to given value.

### HasHotelUseOnly

`func (o *HotelUseType) HasHotelUseOnly() bool`

HasHotelUseOnly returns a boolean if a field has been set.

### GetHotelUseReason

`func (o *HotelUseType) GetHotelUseReason() string`

GetHotelUseReason returns the HotelUseReason field if non-nil, zero value otherwise.

### GetHotelUseReasonOk

`func (o *HotelUseType) GetHotelUseReasonOk() (*string, bool)`

GetHotelUseReasonOk returns a tuple with the HotelUseReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelUseReason

`func (o *HotelUseType) SetHotelUseReason(v string)`

SetHotelUseReason sets HotelUseReason field to given value.

### HasHotelUseReason

`func (o *HotelUseType) HasHotelUseReason() bool`

HasHotelUseReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


