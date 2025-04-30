# RevenueInventoryStatisticsSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateRangeStart** | Pointer to **string** | The starting value of the date range. | [optional] 
**DateRangeEnd** | Pointer to **string** | The ending value of the date range. | [optional] 
**RoomTypes** | Pointer to **[]string** | The optional room types by which revenue and inventory statistics will be grouped. | [optional] 
**MarketCodes** | Pointer to **[]string** | The market codes for which revenue and inventory statistics will be gathered. | [optional] 
**GuaranteeCodes** | Pointer to **[]string** | The reservation guarantee codes for which revenue and inventory statistics will be gathered. | [optional] 
**GroupBy** | Pointer to **[]string** | Group by instructions for revenue inventory statistics that can be used in request operation. Response data will be grouped according to the values provided in this array. MarketCode and RoomType grouping is used for past and future revenue and inventory statistics while GuaranteeType is used only for future revenue and inventory statistics. | [optional] 

## Methods

### NewRevenueInventoryStatisticsSearchType

`func NewRevenueInventoryStatisticsSearchType() *RevenueInventoryStatisticsSearchType`

NewRevenueInventoryStatisticsSearchType instantiates a new RevenueInventoryStatisticsSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueInventoryStatisticsSearchTypeWithDefaults

`func NewRevenueInventoryStatisticsSearchTypeWithDefaults() *RevenueInventoryStatisticsSearchType`

NewRevenueInventoryStatisticsSearchTypeWithDefaults instantiates a new RevenueInventoryStatisticsSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateRangeStart

`func (o *RevenueInventoryStatisticsSearchType) GetDateRangeStart() string`

GetDateRangeStart returns the DateRangeStart field if non-nil, zero value otherwise.

### GetDateRangeStartOk

`func (o *RevenueInventoryStatisticsSearchType) GetDateRangeStartOk() (*string, bool)`

GetDateRangeStartOk returns a tuple with the DateRangeStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRangeStart

`func (o *RevenueInventoryStatisticsSearchType) SetDateRangeStart(v string)`

SetDateRangeStart sets DateRangeStart field to given value.

### HasDateRangeStart

`func (o *RevenueInventoryStatisticsSearchType) HasDateRangeStart() bool`

HasDateRangeStart returns a boolean if a field has been set.

### GetDateRangeEnd

`func (o *RevenueInventoryStatisticsSearchType) GetDateRangeEnd() string`

GetDateRangeEnd returns the DateRangeEnd field if non-nil, zero value otherwise.

### GetDateRangeEndOk

`func (o *RevenueInventoryStatisticsSearchType) GetDateRangeEndOk() (*string, bool)`

GetDateRangeEndOk returns a tuple with the DateRangeEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRangeEnd

`func (o *RevenueInventoryStatisticsSearchType) SetDateRangeEnd(v string)`

SetDateRangeEnd sets DateRangeEnd field to given value.

### HasDateRangeEnd

`func (o *RevenueInventoryStatisticsSearchType) HasDateRangeEnd() bool`

HasDateRangeEnd returns a boolean if a field has been set.

### GetRoomTypes

`func (o *RevenueInventoryStatisticsSearchType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *RevenueInventoryStatisticsSearchType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *RevenueInventoryStatisticsSearchType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *RevenueInventoryStatisticsSearchType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetMarketCodes

`func (o *RevenueInventoryStatisticsSearchType) GetMarketCodes() []string`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *RevenueInventoryStatisticsSearchType) GetMarketCodesOk() (*[]string, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *RevenueInventoryStatisticsSearchType) SetMarketCodes(v []string)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *RevenueInventoryStatisticsSearchType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.

### GetGuaranteeCodes

`func (o *RevenueInventoryStatisticsSearchType) GetGuaranteeCodes() []string`

GetGuaranteeCodes returns the GuaranteeCodes field if non-nil, zero value otherwise.

### GetGuaranteeCodesOk

`func (o *RevenueInventoryStatisticsSearchType) GetGuaranteeCodesOk() (*[]string, bool)`

GetGuaranteeCodesOk returns a tuple with the GuaranteeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCodes

`func (o *RevenueInventoryStatisticsSearchType) SetGuaranteeCodes(v []string)`

SetGuaranteeCodes sets GuaranteeCodes field to given value.

### HasGuaranteeCodes

`func (o *RevenueInventoryStatisticsSearchType) HasGuaranteeCodes() bool`

HasGuaranteeCodes returns a boolean if a field has been set.

### GetGroupBy

`func (o *RevenueInventoryStatisticsSearchType) GetGroupBy() []string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *RevenueInventoryStatisticsSearchType) GetGroupByOk() (*[]string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *RevenueInventoryStatisticsSearchType) SetGroupBy(v []string)`

SetGroupBy sets GroupBy field to given value.

### HasGroupBy

`func (o *RevenueInventoryStatisticsSearchType) HasGroupBy() bool`

HasGroupBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


