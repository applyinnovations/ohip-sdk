# SetBudgetForecastRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BudgetForecastInformation** | Pointer to [**BudgetForecastInformationBaseType**](BudgetForecastInformationBaseType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSetBudgetForecastRequest

`func NewSetBudgetForecastRequest() *SetBudgetForecastRequest`

NewSetBudgetForecastRequest instantiates a new SetBudgetForecastRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetBudgetForecastRequestWithDefaults

`func NewSetBudgetForecastRequestWithDefaults() *SetBudgetForecastRequest`

NewSetBudgetForecastRequestWithDefaults instantiates a new SetBudgetForecastRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBudgetForecastInformation

`func (o *SetBudgetForecastRequest) GetBudgetForecastInformation() BudgetForecastInformationBaseType`

GetBudgetForecastInformation returns the BudgetForecastInformation field if non-nil, zero value otherwise.

### GetBudgetForecastInformationOk

`func (o *SetBudgetForecastRequest) GetBudgetForecastInformationOk() (*BudgetForecastInformationBaseType, bool)`

GetBudgetForecastInformationOk returns a tuple with the BudgetForecastInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetForecastInformation

`func (o *SetBudgetForecastRequest) SetBudgetForecastInformation(v BudgetForecastInformationBaseType)`

SetBudgetForecastInformation sets BudgetForecastInformation field to given value.

### HasBudgetForecastInformation

`func (o *SetBudgetForecastRequest) HasBudgetForecastInformation() bool`

HasBudgetForecastInformation returns a boolean if a field has been set.

### GetLinks

`func (o *SetBudgetForecastRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetBudgetForecastRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetBudgetForecastRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetBudgetForecastRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetBudgetForecastRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetBudgetForecastRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetBudgetForecastRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetBudgetForecastRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


