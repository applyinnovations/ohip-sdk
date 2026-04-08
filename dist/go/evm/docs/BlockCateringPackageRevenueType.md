# BlockCateringPackageRevenueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageEventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RevType** | Pointer to **string** | Revenue Type associated with the Catering Package Price Code. | [optional] 
**OrderBy** | Pointer to **int32** | Sorting Order. | [optional] 
**RevForecast** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RevExpected** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CostExpected** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**EventName** | Pointer to **string** | Name of event. | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**EventTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 

## Methods

### NewBlockCateringPackageRevenueType

`func NewBlockCateringPackageRevenueType() *BlockCateringPackageRevenueType`

NewBlockCateringPackageRevenueType instantiates a new BlockCateringPackageRevenueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCateringPackageRevenueTypeWithDefaults

`func NewBlockCateringPackageRevenueTypeWithDefaults() *BlockCateringPackageRevenueType`

NewBlockCateringPackageRevenueTypeWithDefaults instantiates a new BlockCateringPackageRevenueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageEventId

`func (o *BlockCateringPackageRevenueType) GetPackageEventId() UniqueIDType`

GetPackageEventId returns the PackageEventId field if non-nil, zero value otherwise.

### GetPackageEventIdOk

`func (o *BlockCateringPackageRevenueType) GetPackageEventIdOk() (*UniqueIDType, bool)`

GetPackageEventIdOk returns a tuple with the PackageEventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageEventId

`func (o *BlockCateringPackageRevenueType) SetPackageEventId(v UniqueIDType)`

SetPackageEventId sets PackageEventId field to given value.

### HasPackageEventId

`func (o *BlockCateringPackageRevenueType) HasPackageEventId() bool`

HasPackageEventId returns a boolean if a field has been set.

### GetRevType

`func (o *BlockCateringPackageRevenueType) GetRevType() string`

GetRevType returns the RevType field if non-nil, zero value otherwise.

### GetRevTypeOk

`func (o *BlockCateringPackageRevenueType) GetRevTypeOk() (*string, bool)`

GetRevTypeOk returns a tuple with the RevType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevType

`func (o *BlockCateringPackageRevenueType) SetRevType(v string)`

SetRevType sets RevType field to given value.

### HasRevType

`func (o *BlockCateringPackageRevenueType) HasRevType() bool`

HasRevType returns a boolean if a field has been set.

### GetOrderBy

`func (o *BlockCateringPackageRevenueType) GetOrderBy() int32`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *BlockCateringPackageRevenueType) GetOrderByOk() (*int32, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *BlockCateringPackageRevenueType) SetOrderBy(v int32)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *BlockCateringPackageRevenueType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetRevForecast

`func (o *BlockCateringPackageRevenueType) GetRevForecast() CurrencyAmountType`

GetRevForecast returns the RevForecast field if non-nil, zero value otherwise.

### GetRevForecastOk

`func (o *BlockCateringPackageRevenueType) GetRevForecastOk() (*CurrencyAmountType, bool)`

GetRevForecastOk returns a tuple with the RevForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevForecast

`func (o *BlockCateringPackageRevenueType) SetRevForecast(v CurrencyAmountType)`

SetRevForecast sets RevForecast field to given value.

### HasRevForecast

`func (o *BlockCateringPackageRevenueType) HasRevForecast() bool`

HasRevForecast returns a boolean if a field has been set.

### GetRevExpected

`func (o *BlockCateringPackageRevenueType) GetRevExpected() CurrencyAmountType`

GetRevExpected returns the RevExpected field if non-nil, zero value otherwise.

### GetRevExpectedOk

`func (o *BlockCateringPackageRevenueType) GetRevExpectedOk() (*CurrencyAmountType, bool)`

GetRevExpectedOk returns a tuple with the RevExpected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevExpected

`func (o *BlockCateringPackageRevenueType) SetRevExpected(v CurrencyAmountType)`

SetRevExpected sets RevExpected field to given value.

### HasRevExpected

`func (o *BlockCateringPackageRevenueType) HasRevExpected() bool`

HasRevExpected returns a boolean if a field has been set.

### GetCostExpected

`func (o *BlockCateringPackageRevenueType) GetCostExpected() CurrencyAmountType`

GetCostExpected returns the CostExpected field if non-nil, zero value otherwise.

### GetCostExpectedOk

`func (o *BlockCateringPackageRevenueType) GetCostExpectedOk() (*CurrencyAmountType, bool)`

GetCostExpectedOk returns a tuple with the CostExpected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostExpected

`func (o *BlockCateringPackageRevenueType) SetCostExpected(v CurrencyAmountType)`

SetCostExpected sets CostExpected field to given value.

### HasCostExpected

`func (o *BlockCateringPackageRevenueType) HasCostExpected() bool`

HasCostExpected returns a boolean if a field has been set.

### GetEventName

`func (o *BlockCateringPackageRevenueType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *BlockCateringPackageRevenueType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *BlockCateringPackageRevenueType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *BlockCateringPackageRevenueType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventType

`func (o *BlockCateringPackageRevenueType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *BlockCateringPackageRevenueType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *BlockCateringPackageRevenueType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *BlockCateringPackageRevenueType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetEventTimeSpan

`func (o *BlockCateringPackageRevenueType) GetEventTimeSpan() DateTimeSpanType`

GetEventTimeSpan returns the EventTimeSpan field if non-nil, zero value otherwise.

### GetEventTimeSpanOk

`func (o *BlockCateringPackageRevenueType) GetEventTimeSpanOk() (*DateTimeSpanType, bool)`

GetEventTimeSpanOk returns a tuple with the EventTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTimeSpan

`func (o *BlockCateringPackageRevenueType) SetEventTimeSpan(v DateTimeSpanType)`

SetEventTimeSpan sets EventTimeSpan field to given value.

### HasEventTimeSpan

`func (o *BlockCateringPackageRevenueType) HasEventTimeSpan() bool`

HasEventTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


