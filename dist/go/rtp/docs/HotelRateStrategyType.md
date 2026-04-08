# HotelRateStrategyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StrategyDetail** | Pointer to [**StrategyDetailType**](StrategyDetailType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewHotelRateStrategyType

`func NewHotelRateStrategyType() *HotelRateStrategyType`

NewHotelRateStrategyType instantiates a new HotelRateStrategyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRateStrategyTypeWithDefaults

`func NewHotelRateStrategyTypeWithDefaults() *HotelRateStrategyType`

NewHotelRateStrategyTypeWithDefaults instantiates a new HotelRateStrategyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStrategyDetail

`func (o *HotelRateStrategyType) GetStrategyDetail() StrategyDetailType`

GetStrategyDetail returns the StrategyDetail field if non-nil, zero value otherwise.

### GetStrategyDetailOk

`func (o *HotelRateStrategyType) GetStrategyDetailOk() (*StrategyDetailType, bool)`

GetStrategyDetailOk returns a tuple with the StrategyDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrategyDetail

`func (o *HotelRateStrategyType) SetStrategyDetail(v StrategyDetailType)`

SetStrategyDetail sets StrategyDetail field to given value.

### HasStrategyDetail

`func (o *HotelRateStrategyType) HasStrategyDetail() bool`

HasStrategyDetail returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelRateStrategyType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelRateStrategyType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelRateStrategyType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelRateStrategyType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *HotelRateStrategyType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *HotelRateStrategyType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *HotelRateStrategyType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *HotelRateStrategyType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *HotelRateStrategyType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HotelRateStrategyType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HotelRateStrategyType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *HotelRateStrategyType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


