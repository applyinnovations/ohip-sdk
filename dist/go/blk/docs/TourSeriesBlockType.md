# TourSeriesBlockType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code of the tour series block. | [optional] 
**BlockCode** | Pointer to **string** | The block code of the tour series block. | [optional] 
**StartDate** | Pointer to **string** | The start date of the tour series block. | [optional] 
**BlockStatus** | Pointer to **string** | The booking status of the tour series block. | [optional] 
**BlockName** | Pointer to **string** | The block name of the tour series block. | [optional] 
**MarketCode** | Pointer to **string** | Market code of the master block. If target block does not have codes configured then codes to be added for that property by search option. | [optional] 
**SourceCode** | Pointer to **string** | Source code of the master block. If target block does not have codes configured then codes to be added for that property by search option. | [optional] 
**ReservationType** | Pointer to **string** | Reservation type of the master block. If target block does not have reservation type configured then reservation type to be added for that property by search option. | [optional] 
**Currency** | Pointer to **string** | Currency code of the master block. If currency is not same as master block, currency code need to be added by search option. | [optional] 

## Methods

### NewTourSeriesBlockType

`func NewTourSeriesBlockType() *TourSeriesBlockType`

NewTourSeriesBlockType instantiates a new TourSeriesBlockType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTourSeriesBlockTypeWithDefaults

`func NewTourSeriesBlockTypeWithDefaults() *TourSeriesBlockType`

NewTourSeriesBlockTypeWithDefaults instantiates a new TourSeriesBlockType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TourSeriesBlockType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TourSeriesBlockType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TourSeriesBlockType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TourSeriesBlockType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockCode

`func (o *TourSeriesBlockType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *TourSeriesBlockType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *TourSeriesBlockType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *TourSeriesBlockType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetStartDate

`func (o *TourSeriesBlockType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *TourSeriesBlockType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *TourSeriesBlockType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *TourSeriesBlockType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetBlockStatus

`func (o *TourSeriesBlockType) GetBlockStatus() string`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *TourSeriesBlockType) GetBlockStatusOk() (*string, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *TourSeriesBlockType) SetBlockStatus(v string)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *TourSeriesBlockType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetBlockName

`func (o *TourSeriesBlockType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *TourSeriesBlockType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *TourSeriesBlockType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *TourSeriesBlockType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetMarketCode

`func (o *TourSeriesBlockType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *TourSeriesBlockType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *TourSeriesBlockType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *TourSeriesBlockType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceCode

`func (o *TourSeriesBlockType) GetSourceCode() string`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *TourSeriesBlockType) GetSourceCodeOk() (*string, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *TourSeriesBlockType) SetSourceCode(v string)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *TourSeriesBlockType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.

### GetReservationType

`func (o *TourSeriesBlockType) GetReservationType() string`

GetReservationType returns the ReservationType field if non-nil, zero value otherwise.

### GetReservationTypeOk

`func (o *TourSeriesBlockType) GetReservationTypeOk() (*string, bool)`

GetReservationTypeOk returns a tuple with the ReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationType

`func (o *TourSeriesBlockType) SetReservationType(v string)`

SetReservationType sets ReservationType field to given value.

### HasReservationType

`func (o *TourSeriesBlockType) HasReservationType() bool`

HasReservationType returns a boolean if a field has been set.

### GetCurrency

`func (o *TourSeriesBlockType) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TourSeriesBlockType) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TourSeriesBlockType) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *TourSeriesBlockType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


