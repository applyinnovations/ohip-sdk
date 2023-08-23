# AllRestrictions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**Date** | Pointer to **string** | Date for which restrictions should be cleared. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAllRestrictions

`func NewAllRestrictions() *AllRestrictions`

NewAllRestrictions instantiates a new AllRestrictions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllRestrictionsWithDefaults

`func NewAllRestrictionsWithDefaults() *AllRestrictions`

NewAllRestrictionsWithDefaults instantiates a new AllRestrictions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *AllRestrictions) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AllRestrictions) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AllRestrictions) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AllRestrictions) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *AllRestrictions) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *AllRestrictions) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *AllRestrictions) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *AllRestrictions) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetDate

`func (o *AllRestrictions) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AllRestrictions) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AllRestrictions) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *AllRestrictions) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetLinks

`func (o *AllRestrictions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AllRestrictions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AllRestrictions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AllRestrictions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AllRestrictions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AllRestrictions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AllRestrictions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AllRestrictions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


