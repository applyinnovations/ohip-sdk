# ClearAllRestrictions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | Use date for which the restrictions is to be cleared. | [optional] 
**HotelId** | Pointer to **string** | Used for Character Strings, length 0 to 20. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewClearAllRestrictions

`func NewClearAllRestrictions() *ClearAllRestrictions`

NewClearAllRestrictions instantiates a new ClearAllRestrictions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClearAllRestrictionsWithDefaults

`func NewClearAllRestrictionsWithDefaults() *ClearAllRestrictions`

NewClearAllRestrictionsWithDefaults instantiates a new ClearAllRestrictions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *ClearAllRestrictions) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ClearAllRestrictions) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ClearAllRestrictions) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ClearAllRestrictions) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetHotelId

`func (o *ClearAllRestrictions) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ClearAllRestrictions) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ClearAllRestrictions) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ClearAllRestrictions) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ClearAllRestrictions) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ClearAllRestrictions) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ClearAllRestrictions) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ClearAllRestrictions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ClearAllRestrictions) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ClearAllRestrictions) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ClearAllRestrictions) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ClearAllRestrictions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


