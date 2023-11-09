# PromotionGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Airline** | Pointer to **string** | A Y or N indicates whether the promotion group is associated with an airline whose passengers also participate in the promotion. | [optional] 
**HotelId** | Pointer to **string** | Hotel code the promotion group belongs to. | [optional] 
**Name** | Pointer to **string** | Name of the promotion group. | [optional] 
**Plan** | Pointer to **string** | Description of the marketing plan associated with the promotion group. | [optional] 
**PromotionCodes** | Pointer to [**[]PromotionCodeType**](PromotionCodeType.md) | Collection of Promotion Codes that belong to the promotion group. | [optional] 
**PromotionGroup** | Pointer to **string** | Alphanumeric code for the promotion group. | [optional] 
**Revenue** | Pointer to **string** | A Y or N indicates if revenue is expected or the current year from this promotion group. | [optional] 
**Type** | Pointer to **string** | Type of promotion group (e.g., radio, TV, Internet/Web, email, etc.). | [optional] 

## Methods

### NewPromotionGroupType

`func NewPromotionGroupType() *PromotionGroupType`

NewPromotionGroupType instantiates a new PromotionGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromotionGroupTypeWithDefaults

`func NewPromotionGroupTypeWithDefaults() *PromotionGroupType`

NewPromotionGroupTypeWithDefaults instantiates a new PromotionGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAirline

`func (o *PromotionGroupType) GetAirline() string`

GetAirline returns the Airline field if non-nil, zero value otherwise.

### GetAirlineOk

`func (o *PromotionGroupType) GetAirlineOk() (*string, bool)`

GetAirlineOk returns a tuple with the Airline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirline

`func (o *PromotionGroupType) SetAirline(v string)`

SetAirline sets Airline field to given value.

### HasAirline

`func (o *PromotionGroupType) HasAirline() bool`

HasAirline returns a boolean if a field has been set.

### GetHotelId

`func (o *PromotionGroupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PromotionGroupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PromotionGroupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PromotionGroupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetName

`func (o *PromotionGroupType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PromotionGroupType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PromotionGroupType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PromotionGroupType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPlan

`func (o *PromotionGroupType) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *PromotionGroupType) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *PromotionGroupType) SetPlan(v string)`

SetPlan sets Plan field to given value.

### HasPlan

`func (o *PromotionGroupType) HasPlan() bool`

HasPlan returns a boolean if a field has been set.

### GetPromotionCodes

`func (o *PromotionGroupType) GetPromotionCodes() []PromotionCodeType`

GetPromotionCodes returns the PromotionCodes field if non-nil, zero value otherwise.

### GetPromotionCodesOk

`func (o *PromotionGroupType) GetPromotionCodesOk() (*[]PromotionCodeType, bool)`

GetPromotionCodesOk returns a tuple with the PromotionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCodes

`func (o *PromotionGroupType) SetPromotionCodes(v []PromotionCodeType)`

SetPromotionCodes sets PromotionCodes field to given value.

### HasPromotionCodes

`func (o *PromotionGroupType) HasPromotionCodes() bool`

HasPromotionCodes returns a boolean if a field has been set.

### GetPromotionGroup

`func (o *PromotionGroupType) GetPromotionGroup() string`

GetPromotionGroup returns the PromotionGroup field if non-nil, zero value otherwise.

### GetPromotionGroupOk

`func (o *PromotionGroupType) GetPromotionGroupOk() (*string, bool)`

GetPromotionGroupOk returns a tuple with the PromotionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroup

`func (o *PromotionGroupType) SetPromotionGroup(v string)`

SetPromotionGroup sets PromotionGroup field to given value.

### HasPromotionGroup

`func (o *PromotionGroupType) HasPromotionGroup() bool`

HasPromotionGroup returns a boolean if a field has been set.

### GetRevenue

`func (o *PromotionGroupType) GetRevenue() string`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *PromotionGroupType) GetRevenueOk() (*string, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *PromotionGroupType) SetRevenue(v string)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *PromotionGroupType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetType

`func (o *PromotionGroupType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PromotionGroupType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PromotionGroupType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PromotionGroupType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


