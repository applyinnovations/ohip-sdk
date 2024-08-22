# BudgetForecastInformationBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringSegmentInformation** | Pointer to [**BudgetForecastCateringInfoBaseType**](BudgetForecastCateringInfoBaseType.md) |  | [optional] 
**CustomSegmentInformation** | Pointer to [**BudgetForecastCustomInfoBaseType**](BudgetForecastCustomInfoBaseType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Opera Hotel code for the Fetch Revenue information. | [optional] 
**MarketSegmentInformation** | Pointer to [**BudgetForecastMarketInfoBaseType**](BudgetForecastMarketInfoBaseType.md) |  | [optional] 
**RateSegmentInformation** | Pointer to [**BudgetForecastRateInfoBaseType**](BudgetForecastRateInfoBaseType.md) |  | [optional] 
**TransactionSegmentInformation** | Pointer to [**BudgetForecastTransactionInfoBaseType**](BudgetForecastTransactionInfoBaseType.md) |  | [optional] 
**Year** | Pointer to **string** | Year of revenue to be fetched. | [optional] 

## Methods

### NewBudgetForecastInformationBaseType

`func NewBudgetForecastInformationBaseType() *BudgetForecastInformationBaseType`

NewBudgetForecastInformationBaseType instantiates a new BudgetForecastInformationBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastInformationBaseTypeWithDefaults

`func NewBudgetForecastInformationBaseTypeWithDefaults() *BudgetForecastInformationBaseType`

NewBudgetForecastInformationBaseTypeWithDefaults instantiates a new BudgetForecastInformationBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringSegmentInformation

`func (o *BudgetForecastInformationBaseType) GetCateringSegmentInformation() BudgetForecastCateringInfoBaseType`

GetCateringSegmentInformation returns the CateringSegmentInformation field if non-nil, zero value otherwise.

### GetCateringSegmentInformationOk

`func (o *BudgetForecastInformationBaseType) GetCateringSegmentInformationOk() (*BudgetForecastCateringInfoBaseType, bool)`

GetCateringSegmentInformationOk returns a tuple with the CateringSegmentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringSegmentInformation

`func (o *BudgetForecastInformationBaseType) SetCateringSegmentInformation(v BudgetForecastCateringInfoBaseType)`

SetCateringSegmentInformation sets CateringSegmentInformation field to given value.

### HasCateringSegmentInformation

`func (o *BudgetForecastInformationBaseType) HasCateringSegmentInformation() bool`

HasCateringSegmentInformation returns a boolean if a field has been set.

### GetCustomSegmentInformation

`func (o *BudgetForecastInformationBaseType) GetCustomSegmentInformation() BudgetForecastCustomInfoBaseType`

GetCustomSegmentInformation returns the CustomSegmentInformation field if non-nil, zero value otherwise.

### GetCustomSegmentInformationOk

`func (o *BudgetForecastInformationBaseType) GetCustomSegmentInformationOk() (*BudgetForecastCustomInfoBaseType, bool)`

GetCustomSegmentInformationOk returns a tuple with the CustomSegmentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomSegmentInformation

`func (o *BudgetForecastInformationBaseType) SetCustomSegmentInformation(v BudgetForecastCustomInfoBaseType)`

SetCustomSegmentInformation sets CustomSegmentInformation field to given value.

### HasCustomSegmentInformation

`func (o *BudgetForecastInformationBaseType) HasCustomSegmentInformation() bool`

HasCustomSegmentInformation returns a boolean if a field has been set.

### GetHotelId

`func (o *BudgetForecastInformationBaseType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BudgetForecastInformationBaseType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BudgetForecastInformationBaseType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BudgetForecastInformationBaseType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMarketSegmentInformation

`func (o *BudgetForecastInformationBaseType) GetMarketSegmentInformation() BudgetForecastMarketInfoBaseType`

GetMarketSegmentInformation returns the MarketSegmentInformation field if non-nil, zero value otherwise.

### GetMarketSegmentInformationOk

`func (o *BudgetForecastInformationBaseType) GetMarketSegmentInformationOk() (*BudgetForecastMarketInfoBaseType, bool)`

GetMarketSegmentInformationOk returns a tuple with the MarketSegmentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketSegmentInformation

`func (o *BudgetForecastInformationBaseType) SetMarketSegmentInformation(v BudgetForecastMarketInfoBaseType)`

SetMarketSegmentInformation sets MarketSegmentInformation field to given value.

### HasMarketSegmentInformation

`func (o *BudgetForecastInformationBaseType) HasMarketSegmentInformation() bool`

HasMarketSegmentInformation returns a boolean if a field has been set.

### GetRateSegmentInformation

`func (o *BudgetForecastInformationBaseType) GetRateSegmentInformation() BudgetForecastRateInfoBaseType`

GetRateSegmentInformation returns the RateSegmentInformation field if non-nil, zero value otherwise.

### GetRateSegmentInformationOk

`func (o *BudgetForecastInformationBaseType) GetRateSegmentInformationOk() (*BudgetForecastRateInfoBaseType, bool)`

GetRateSegmentInformationOk returns a tuple with the RateSegmentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSegmentInformation

`func (o *BudgetForecastInformationBaseType) SetRateSegmentInformation(v BudgetForecastRateInfoBaseType)`

SetRateSegmentInformation sets RateSegmentInformation field to given value.

### HasRateSegmentInformation

`func (o *BudgetForecastInformationBaseType) HasRateSegmentInformation() bool`

HasRateSegmentInformation returns a boolean if a field has been set.

### GetTransactionSegmentInformation

`func (o *BudgetForecastInformationBaseType) GetTransactionSegmentInformation() BudgetForecastTransactionInfoBaseType`

GetTransactionSegmentInformation returns the TransactionSegmentInformation field if non-nil, zero value otherwise.

### GetTransactionSegmentInformationOk

`func (o *BudgetForecastInformationBaseType) GetTransactionSegmentInformationOk() (*BudgetForecastTransactionInfoBaseType, bool)`

GetTransactionSegmentInformationOk returns a tuple with the TransactionSegmentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSegmentInformation

`func (o *BudgetForecastInformationBaseType) SetTransactionSegmentInformation(v BudgetForecastTransactionInfoBaseType)`

SetTransactionSegmentInformation sets TransactionSegmentInformation field to given value.

### HasTransactionSegmentInformation

`func (o *BudgetForecastInformationBaseType) HasTransactionSegmentInformation() bool`

HasTransactionSegmentInformation returns a boolean if a field has been set.

### GetYear

`func (o *BudgetForecastInformationBaseType) GetYear() string`

GetYear returns the Year field if non-nil, zero value otherwise.

### GetYearOk

`func (o *BudgetForecastInformationBaseType) GetYearOk() (*string, bool)`

GetYearOk returns a tuple with the Year field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYear

`func (o *BudgetForecastInformationBaseType) SetYear(v string)`

SetYear sets Year field to given value.

### HasYear

`func (o *BudgetForecastInformationBaseType) HasYear() bool`

HasYear returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


