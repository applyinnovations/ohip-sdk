# DeleteBudgetForecastRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**SegmentCodeInformation** | Pointer to [**DeleteSegmentCodeBudgetInformationType**](DeleteSegmentCodeBudgetInformationType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDeleteBudgetForecastRequest

`func NewDeleteBudgetForecastRequest() *DeleteBudgetForecastRequest`

NewDeleteBudgetForecastRequest instantiates a new DeleteBudgetForecastRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteBudgetForecastRequestWithDefaults

`func NewDeleteBudgetForecastRequestWithDefaults() *DeleteBudgetForecastRequest`

NewDeleteBudgetForecastRequestWithDefaults instantiates a new DeleteBudgetForecastRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DeleteBudgetForecastRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeleteBudgetForecastRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeleteBudgetForecastRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeleteBudgetForecastRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSegmentCodeInformation

`func (o *DeleteBudgetForecastRequest) GetSegmentCodeInformation() DeleteSegmentCodeBudgetInformationType`

GetSegmentCodeInformation returns the SegmentCodeInformation field if non-nil, zero value otherwise.

### GetSegmentCodeInformationOk

`func (o *DeleteBudgetForecastRequest) GetSegmentCodeInformationOk() (*DeleteSegmentCodeBudgetInformationType, bool)`

GetSegmentCodeInformationOk returns a tuple with the SegmentCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCodeInformation

`func (o *DeleteBudgetForecastRequest) SetSegmentCodeInformation(v DeleteSegmentCodeBudgetInformationType)`

SetSegmentCodeInformation sets SegmentCodeInformation field to given value.

### HasSegmentCodeInformation

`func (o *DeleteBudgetForecastRequest) HasSegmentCodeInformation() bool`

HasSegmentCodeInformation returns a boolean if a field has been set.

### GetWarnings

`func (o *DeleteBudgetForecastRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeleteBudgetForecastRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeleteBudgetForecastRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeleteBudgetForecastRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


