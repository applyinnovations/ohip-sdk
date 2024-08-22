# CateringPackagePricingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockDate** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**BookingType** | Pointer to **string** | Collection of configured Booking Types for the package property. | [optional] 
**Description** | Pointer to **string** | Title of the Catering Package Event Note. | [optional] 
**FlatRate** | Pointer to **bool** | Defines if Flat Rate is applicable. | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**MarketCode** | Pointer to **string** | Market Code associated with the Price Details. | [optional] 
**MaxAttendees** | Pointer to **int32** | Maximum Attendees. | [optional] 
**MinAttendees** | Pointer to **int32** | Minimum Attendees. | [optional] 
**PriceCode** | Pointer to **string** | Price Code. | [optional] 
**RevenueDetails** | Pointer to [**[]CateringPackageRevenueType**](CateringPackageRevenueType.md) | Collection of multiple Revenue Details associated with a particular Catering Package Price Code. | [optional] 
**SellDate** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**TotalPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**WebBookable** | Pointer to **bool** | Defines if web booking is allowed. | [optional] 

## Methods

### NewCateringPackagePricingType

`func NewCateringPackagePricingType() *CateringPackagePricingType`

NewCateringPackagePricingType instantiates a new CateringPackagePricingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackagePricingTypeWithDefaults

`func NewCateringPackagePricingTypeWithDefaults() *CateringPackagePricingType`

NewCateringPackagePricingTypeWithDefaults instantiates a new CateringPackagePricingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockDate

`func (o *CateringPackagePricingType) GetBlockDate() DateTimeSpanType`

GetBlockDate returns the BlockDate field if non-nil, zero value otherwise.

### GetBlockDateOk

`func (o *CateringPackagePricingType) GetBlockDateOk() (*DateTimeSpanType, bool)`

GetBlockDateOk returns a tuple with the BlockDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDate

`func (o *CateringPackagePricingType) SetBlockDate(v DateTimeSpanType)`

SetBlockDate sets BlockDate field to given value.

### HasBlockDate

`func (o *CateringPackagePricingType) HasBlockDate() bool`

HasBlockDate returns a boolean if a field has been set.

### GetBookingType

`func (o *CateringPackagePricingType) GetBookingType() string`

GetBookingType returns the BookingType field if non-nil, zero value otherwise.

### GetBookingTypeOk

`func (o *CateringPackagePricingType) GetBookingTypeOk() (*string, bool)`

GetBookingTypeOk returns a tuple with the BookingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingType

`func (o *CateringPackagePricingType) SetBookingType(v string)`

SetBookingType sets BookingType field to given value.

### HasBookingType

`func (o *CateringPackagePricingType) HasBookingType() bool`

HasBookingType returns a boolean if a field has been set.

### GetDescription

`func (o *CateringPackagePricingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CateringPackagePricingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CateringPackagePricingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CateringPackagePricingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFlatRate

`func (o *CateringPackagePricingType) GetFlatRate() bool`

GetFlatRate returns the FlatRate field if non-nil, zero value otherwise.

### GetFlatRateOk

`func (o *CateringPackagePricingType) GetFlatRateOk() (*bool, bool)`

GetFlatRateOk returns a tuple with the FlatRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatRate

`func (o *CateringPackagePricingType) SetFlatRate(v bool)`

SetFlatRate sets FlatRate field to given value.

### HasFlatRate

`func (o *CateringPackagePricingType) HasFlatRate() bool`

HasFlatRate returns a boolean if a field has been set.

### GetId

`func (o *CateringPackagePricingType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringPackagePricingType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringPackagePricingType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringPackagePricingType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMarketCode

`func (o *CateringPackagePricingType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *CateringPackagePricingType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *CateringPackagePricingType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *CateringPackagePricingType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetMaxAttendees

`func (o *CateringPackagePricingType) GetMaxAttendees() int32`

GetMaxAttendees returns the MaxAttendees field if non-nil, zero value otherwise.

### GetMaxAttendeesOk

`func (o *CateringPackagePricingType) GetMaxAttendeesOk() (*int32, bool)`

GetMaxAttendeesOk returns a tuple with the MaxAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAttendees

`func (o *CateringPackagePricingType) SetMaxAttendees(v int32)`

SetMaxAttendees sets MaxAttendees field to given value.

### HasMaxAttendees

`func (o *CateringPackagePricingType) HasMaxAttendees() bool`

HasMaxAttendees returns a boolean if a field has been set.

### GetMinAttendees

`func (o *CateringPackagePricingType) GetMinAttendees() int32`

GetMinAttendees returns the MinAttendees field if non-nil, zero value otherwise.

### GetMinAttendeesOk

`func (o *CateringPackagePricingType) GetMinAttendeesOk() (*int32, bool)`

GetMinAttendeesOk returns a tuple with the MinAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinAttendees

`func (o *CateringPackagePricingType) SetMinAttendees(v int32)`

SetMinAttendees sets MinAttendees field to given value.

### HasMinAttendees

`func (o *CateringPackagePricingType) HasMinAttendees() bool`

HasMinAttendees returns a boolean if a field has been set.

### GetPriceCode

`func (o *CateringPackagePricingType) GetPriceCode() string`

GetPriceCode returns the PriceCode field if non-nil, zero value otherwise.

### GetPriceCodeOk

`func (o *CateringPackagePricingType) GetPriceCodeOk() (*string, bool)`

GetPriceCodeOk returns a tuple with the PriceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceCode

`func (o *CateringPackagePricingType) SetPriceCode(v string)`

SetPriceCode sets PriceCode field to given value.

### HasPriceCode

`func (o *CateringPackagePricingType) HasPriceCode() bool`

HasPriceCode returns a boolean if a field has been set.

### GetRevenueDetails

`func (o *CateringPackagePricingType) GetRevenueDetails() []CateringPackageRevenueType`

GetRevenueDetails returns the RevenueDetails field if non-nil, zero value otherwise.

### GetRevenueDetailsOk

`func (o *CateringPackagePricingType) GetRevenueDetailsOk() (*[]CateringPackageRevenueType, bool)`

GetRevenueDetailsOk returns a tuple with the RevenueDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDetails

`func (o *CateringPackagePricingType) SetRevenueDetails(v []CateringPackageRevenueType)`

SetRevenueDetails sets RevenueDetails field to given value.

### HasRevenueDetails

`func (o *CateringPackagePricingType) HasRevenueDetails() bool`

HasRevenueDetails returns a boolean if a field has been set.

### GetSellDate

`func (o *CateringPackagePricingType) GetSellDate() DateTimeSpanType`

GetSellDate returns the SellDate field if non-nil, zero value otherwise.

### GetSellDateOk

`func (o *CateringPackagePricingType) GetSellDateOk() (*DateTimeSpanType, bool)`

GetSellDateOk returns a tuple with the SellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellDate

`func (o *CateringPackagePricingType) SetSellDate(v DateTimeSpanType)`

SetSellDate sets SellDate field to given value.

### HasSellDate

`func (o *CateringPackagePricingType) HasSellDate() bool`

HasSellDate returns a boolean if a field has been set.

### GetTotalPrice

`func (o *CateringPackagePricingType) GetTotalPrice() CurrencyAmountType`

GetTotalPrice returns the TotalPrice field if non-nil, zero value otherwise.

### GetTotalPriceOk

`func (o *CateringPackagePricingType) GetTotalPriceOk() (*CurrencyAmountType, bool)`

GetTotalPriceOk returns a tuple with the TotalPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPrice

`func (o *CateringPackagePricingType) SetTotalPrice(v CurrencyAmountType)`

SetTotalPrice sets TotalPrice field to given value.

### HasTotalPrice

`func (o *CateringPackagePricingType) HasTotalPrice() bool`

HasTotalPrice returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringPackagePricingType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringPackagePricingType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringPackagePricingType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringPackagePricingType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


