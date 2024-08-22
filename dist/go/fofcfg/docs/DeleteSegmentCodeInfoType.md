# DeleteSegmentCodeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Budget** | Pointer to **bool** | Flag to include Budget revenue/nights information. | [optional] 
**BudgetMonth** | Pointer to [**MonthNoType**](MonthNoType.md) |  | [optional] 
**DeleteInformation** | Pointer to [**BudgetInfoDeleteType**](BudgetInfoDeleteType.md) |  | [optional] 
**Forecast** | Pointer to **bool** | Flag to include Forecast revenue/nights information. | [optional] 
**Segment** | Pointer to [**SegmentNameType**](SegmentNameType.md) |  | [optional] 
**SegmentCode** | Pointer to **[]string** |  | [optional] 
**SegmentCodeGroup** | Pointer to **string** | segment code group. | [optional] 

## Methods

### NewDeleteSegmentCodeInfoType

`func NewDeleteSegmentCodeInfoType() *DeleteSegmentCodeInfoType`

NewDeleteSegmentCodeInfoType instantiates a new DeleteSegmentCodeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteSegmentCodeInfoTypeWithDefaults

`func NewDeleteSegmentCodeInfoTypeWithDefaults() *DeleteSegmentCodeInfoType`

NewDeleteSegmentCodeInfoTypeWithDefaults instantiates a new DeleteSegmentCodeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBudget

`func (o *DeleteSegmentCodeInfoType) GetBudget() bool`

GetBudget returns the Budget field if non-nil, zero value otherwise.

### GetBudgetOk

`func (o *DeleteSegmentCodeInfoType) GetBudgetOk() (*bool, bool)`

GetBudgetOk returns a tuple with the Budget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudget

`func (o *DeleteSegmentCodeInfoType) SetBudget(v bool)`

SetBudget sets Budget field to given value.

### HasBudget

`func (o *DeleteSegmentCodeInfoType) HasBudget() bool`

HasBudget returns a boolean if a field has been set.

### GetBudgetMonth

`func (o *DeleteSegmentCodeInfoType) GetBudgetMonth() MonthNoType`

GetBudgetMonth returns the BudgetMonth field if non-nil, zero value otherwise.

### GetBudgetMonthOk

`func (o *DeleteSegmentCodeInfoType) GetBudgetMonthOk() (*MonthNoType, bool)`

GetBudgetMonthOk returns a tuple with the BudgetMonth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetMonth

`func (o *DeleteSegmentCodeInfoType) SetBudgetMonth(v MonthNoType)`

SetBudgetMonth sets BudgetMonth field to given value.

### HasBudgetMonth

`func (o *DeleteSegmentCodeInfoType) HasBudgetMonth() bool`

HasBudgetMonth returns a boolean if a field has been set.

### GetDeleteInformation

`func (o *DeleteSegmentCodeInfoType) GetDeleteInformation() BudgetInfoDeleteType`

GetDeleteInformation returns the DeleteInformation field if non-nil, zero value otherwise.

### GetDeleteInformationOk

`func (o *DeleteSegmentCodeInfoType) GetDeleteInformationOk() (*BudgetInfoDeleteType, bool)`

GetDeleteInformationOk returns a tuple with the DeleteInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteInformation

`func (o *DeleteSegmentCodeInfoType) SetDeleteInformation(v BudgetInfoDeleteType)`

SetDeleteInformation sets DeleteInformation field to given value.

### HasDeleteInformation

`func (o *DeleteSegmentCodeInfoType) HasDeleteInformation() bool`

HasDeleteInformation returns a boolean if a field has been set.

### GetForecast

`func (o *DeleteSegmentCodeInfoType) GetForecast() bool`

GetForecast returns the Forecast field if non-nil, zero value otherwise.

### GetForecastOk

`func (o *DeleteSegmentCodeInfoType) GetForecastOk() (*bool, bool)`

GetForecastOk returns a tuple with the Forecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecast

`func (o *DeleteSegmentCodeInfoType) SetForecast(v bool)`

SetForecast sets Forecast field to given value.

### HasForecast

`func (o *DeleteSegmentCodeInfoType) HasForecast() bool`

HasForecast returns a boolean if a field has been set.

### GetSegment

`func (o *DeleteSegmentCodeInfoType) GetSegment() SegmentNameType`

GetSegment returns the Segment field if non-nil, zero value otherwise.

### GetSegmentOk

`func (o *DeleteSegmentCodeInfoType) GetSegmentOk() (*SegmentNameType, bool)`

GetSegmentOk returns a tuple with the Segment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegment

`func (o *DeleteSegmentCodeInfoType) SetSegment(v SegmentNameType)`

SetSegment sets Segment field to given value.

### HasSegment

`func (o *DeleteSegmentCodeInfoType) HasSegment() bool`

HasSegment returns a boolean if a field has been set.

### GetSegmentCode

`func (o *DeleteSegmentCodeInfoType) GetSegmentCode() []string`

GetSegmentCode returns the SegmentCode field if non-nil, zero value otherwise.

### GetSegmentCodeOk

`func (o *DeleteSegmentCodeInfoType) GetSegmentCodeOk() (*[]string, bool)`

GetSegmentCodeOk returns a tuple with the SegmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCode

`func (o *DeleteSegmentCodeInfoType) SetSegmentCode(v []string)`

SetSegmentCode sets SegmentCode field to given value.

### HasSegmentCode

`func (o *DeleteSegmentCodeInfoType) HasSegmentCode() bool`

HasSegmentCode returns a boolean if a field has been set.

### GetSegmentCodeGroup

`func (o *DeleteSegmentCodeInfoType) GetSegmentCodeGroup() string`

GetSegmentCodeGroup returns the SegmentCodeGroup field if non-nil, zero value otherwise.

### GetSegmentCodeGroupOk

`func (o *DeleteSegmentCodeInfoType) GetSegmentCodeGroupOk() (*string, bool)`

GetSegmentCodeGroupOk returns a tuple with the SegmentCodeGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCodeGroup

`func (o *DeleteSegmentCodeInfoType) SetSegmentCodeGroup(v string)`

SetSegmentCodeGroup sets SegmentCodeGroup field to given value.

### HasSegmentCodeGroup

`func (o *DeleteSegmentCodeInfoType) HasSegmentCodeGroup() bool`

HasSegmentCodeGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


