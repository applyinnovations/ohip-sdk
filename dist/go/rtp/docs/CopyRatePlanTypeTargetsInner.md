# CopyRatePlanTypeTargetsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code to which rate code will be copied. | [optional] 
**RatePlanCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | The code and description to be used for the rate plan being copied. | [optional] 

## Methods

### NewCopyRatePlanTypeTargetsInner

`func NewCopyRatePlanTypeTargetsInner() *CopyRatePlanTypeTargetsInner`

NewCopyRatePlanTypeTargetsInner instantiates a new CopyRatePlanTypeTargetsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRatePlanTypeTargetsInnerWithDefaults

`func NewCopyRatePlanTypeTargetsInnerWithDefaults() *CopyRatePlanTypeTargetsInner`

NewCopyRatePlanTypeTargetsInnerWithDefaults instantiates a new CopyRatePlanTypeTargetsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyRatePlanTypeTargetsInner) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyRatePlanTypeTargetsInner) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyRatePlanTypeTargetsInner) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyRatePlanTypeTargetsInner) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCodes

`func (o *CopyRatePlanTypeTargetsInner) GetRatePlanCodes() []CodeDescriptionType`

GetRatePlanCodes returns the RatePlanCodes field if non-nil, zero value otherwise.

### GetRatePlanCodesOk

`func (o *CopyRatePlanTypeTargetsInner) GetRatePlanCodesOk() (*[]CodeDescriptionType, bool)`

GetRatePlanCodesOk returns a tuple with the RatePlanCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCodes

`func (o *CopyRatePlanTypeTargetsInner) SetRatePlanCodes(v []CodeDescriptionType)`

SetRatePlanCodes sets RatePlanCodes field to given value.

### HasRatePlanCodes

`func (o *CopyRatePlanTypeTargetsInner) HasRatePlanCodes() bool`

HasRatePlanCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


