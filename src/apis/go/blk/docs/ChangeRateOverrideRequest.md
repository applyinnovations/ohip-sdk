# ChangeRateOverrideRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**AllowRateOverride** | Pointer to **bool** | Indicates whether rates of a block can be overridden. Applicable only for blocks with a Rate Code. | [optional] 
**RateOverrideReason** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeRateOverrideRequest

`func NewChangeRateOverrideRequest() *ChangeRateOverrideRequest`

NewChangeRateOverrideRequest instantiates a new ChangeRateOverrideRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRateOverrideRequestWithDefaults

`func NewChangeRateOverrideRequestWithDefaults() *ChangeRateOverrideRequest`

NewChangeRateOverrideRequestWithDefaults instantiates a new ChangeRateOverrideRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ChangeRateOverrideRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeRateOverrideRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeRateOverrideRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeRateOverrideRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockIdList

`func (o *ChangeRateOverrideRequest) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *ChangeRateOverrideRequest) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *ChangeRateOverrideRequest) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *ChangeRateOverrideRequest) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetAllowRateOverride

`func (o *ChangeRateOverrideRequest) GetAllowRateOverride() bool`

GetAllowRateOverride returns the AllowRateOverride field if non-nil, zero value otherwise.

### GetAllowRateOverrideOk

`func (o *ChangeRateOverrideRequest) GetAllowRateOverrideOk() (*bool, bool)`

GetAllowRateOverrideOk returns a tuple with the AllowRateOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRateOverride

`func (o *ChangeRateOverrideRequest) SetAllowRateOverride(v bool)`

SetAllowRateOverride sets AllowRateOverride field to given value.

### HasAllowRateOverride

`func (o *ChangeRateOverrideRequest) HasAllowRateOverride() bool`

HasAllowRateOverride returns a boolean if a field has been set.

### GetRateOverrideReason

`func (o *ChangeRateOverrideRequest) GetRateOverrideReason() CodeDescriptionType`

GetRateOverrideReason returns the RateOverrideReason field if non-nil, zero value otherwise.

### GetRateOverrideReasonOk

`func (o *ChangeRateOverrideRequest) GetRateOverrideReasonOk() (*CodeDescriptionType, bool)`

GetRateOverrideReasonOk returns a tuple with the RateOverrideReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateOverrideReason

`func (o *ChangeRateOverrideRequest) SetRateOverrideReason(v CodeDescriptionType)`

SetRateOverrideReason sets RateOverrideReason field to given value.

### HasRateOverrideReason

`func (o *ChangeRateOverrideRequest) HasRateOverrideReason() bool`

HasRateOverrideReason returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeRateOverrideRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeRateOverrideRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeRateOverrideRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeRateOverrideRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeRateOverrideRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeRateOverrideRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeRateOverrideRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeRateOverrideRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


