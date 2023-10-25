# GeneralAvailSimulatorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableRatePlans** | Pointer to [**[]AvailableRatePlanType**](AvailableRatePlanType.md) |  | [optional] 
**BookingChannelCode** | Pointer to **string** |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**MarketingInfo** | Pointer to **string** |  | [optional] 
**SellOrder** | Pointer to [**SellOrderType**](SellOrderType.md) |  | [optional] 
**SupportsHTMLEditor** | Pointer to **string** |  | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewGeneralAvailSimulatorType

`func NewGeneralAvailSimulatorType() *GeneralAvailSimulatorType`

NewGeneralAvailSimulatorType instantiates a new GeneralAvailSimulatorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneralAvailSimulatorTypeWithDefaults

`func NewGeneralAvailSimulatorTypeWithDefaults() *GeneralAvailSimulatorType`

NewGeneralAvailSimulatorTypeWithDefaults instantiates a new GeneralAvailSimulatorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableRatePlans

`func (o *GeneralAvailSimulatorType) GetAvailableRatePlans() []AvailableRatePlanType`

GetAvailableRatePlans returns the AvailableRatePlans field if non-nil, zero value otherwise.

### GetAvailableRatePlansOk

`func (o *GeneralAvailSimulatorType) GetAvailableRatePlansOk() (*[]AvailableRatePlanType, bool)`

GetAvailableRatePlansOk returns a tuple with the AvailableRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRatePlans

`func (o *GeneralAvailSimulatorType) SetAvailableRatePlans(v []AvailableRatePlanType)`

SetAvailableRatePlans sets AvailableRatePlans field to given value.

### HasAvailableRatePlans

`func (o *GeneralAvailSimulatorType) HasAvailableRatePlans() bool`

HasAvailableRatePlans returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *GeneralAvailSimulatorType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *GeneralAvailSimulatorType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *GeneralAvailSimulatorType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *GeneralAvailSimulatorType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetCount

`func (o *GeneralAvailSimulatorType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *GeneralAvailSimulatorType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *GeneralAvailSimulatorType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *GeneralAvailSimulatorType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *GeneralAvailSimulatorType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *GeneralAvailSimulatorType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *GeneralAvailSimulatorType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *GeneralAvailSimulatorType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetHotelId

`func (o *GeneralAvailSimulatorType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GeneralAvailSimulatorType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GeneralAvailSimulatorType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GeneralAvailSimulatorType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMarketingInfo

`func (o *GeneralAvailSimulatorType) GetMarketingInfo() string`

GetMarketingInfo returns the MarketingInfo field if non-nil, zero value otherwise.

### GetMarketingInfoOk

`func (o *GeneralAvailSimulatorType) GetMarketingInfoOk() (*string, bool)`

GetMarketingInfoOk returns a tuple with the MarketingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingInfo

`func (o *GeneralAvailSimulatorType) SetMarketingInfo(v string)`

SetMarketingInfo sets MarketingInfo field to given value.

### HasMarketingInfo

`func (o *GeneralAvailSimulatorType) HasMarketingInfo() bool`

HasMarketingInfo returns a boolean if a field has been set.

### GetSellOrder

`func (o *GeneralAvailSimulatorType) GetSellOrder() SellOrderType`

GetSellOrder returns the SellOrder field if non-nil, zero value otherwise.

### GetSellOrderOk

`func (o *GeneralAvailSimulatorType) GetSellOrderOk() (*SellOrderType, bool)`

GetSellOrderOk returns a tuple with the SellOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellOrder

`func (o *GeneralAvailSimulatorType) SetSellOrder(v SellOrderType)`

SetSellOrder sets SellOrder field to given value.

### HasSellOrder

`func (o *GeneralAvailSimulatorType) HasSellOrder() bool`

HasSellOrder returns a boolean if a field has been set.

### GetSupportsHTMLEditor

`func (o *GeneralAvailSimulatorType) GetSupportsHTMLEditor() string`

GetSupportsHTMLEditor returns the SupportsHTMLEditor field if non-nil, zero value otherwise.

### GetSupportsHTMLEditorOk

`func (o *GeneralAvailSimulatorType) GetSupportsHTMLEditorOk() (*string, bool)`

GetSupportsHTMLEditorOk returns a tuple with the SupportsHTMLEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsHTMLEditor

`func (o *GeneralAvailSimulatorType) SetSupportsHTMLEditor(v string)`

SetSupportsHTMLEditor sets SupportsHTMLEditor field to given value.

### HasSupportsHTMLEditor

`func (o *GeneralAvailSimulatorType) HasSupportsHTMLEditor() bool`

HasSupportsHTMLEditor returns a boolean if a field has been set.

### GetTotalResults

`func (o *GeneralAvailSimulatorType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *GeneralAvailSimulatorType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *GeneralAvailSimulatorType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *GeneralAvailSimulatorType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


