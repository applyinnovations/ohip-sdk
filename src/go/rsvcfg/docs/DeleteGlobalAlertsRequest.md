# DeleteGlobalAlertsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GlobalAlerts** | Pointer to [**GlobalAlertsType**](GlobalAlertsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDeleteGlobalAlertsRequest

`func NewDeleteGlobalAlertsRequest() *DeleteGlobalAlertsRequest`

NewDeleteGlobalAlertsRequest instantiates a new DeleteGlobalAlertsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteGlobalAlertsRequestWithDefaults

`func NewDeleteGlobalAlertsRequestWithDefaults() *DeleteGlobalAlertsRequest`

NewDeleteGlobalAlertsRequestWithDefaults instantiates a new DeleteGlobalAlertsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGlobalAlerts

`func (o *DeleteGlobalAlertsRequest) GetGlobalAlerts() GlobalAlertsType`

GetGlobalAlerts returns the GlobalAlerts field if non-nil, zero value otherwise.

### GetGlobalAlertsOk

`func (o *DeleteGlobalAlertsRequest) GetGlobalAlertsOk() (*GlobalAlertsType, bool)`

GetGlobalAlertsOk returns a tuple with the GlobalAlerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalAlerts

`func (o *DeleteGlobalAlertsRequest) SetGlobalAlerts(v GlobalAlertsType)`

SetGlobalAlerts sets GlobalAlerts field to given value.

### HasGlobalAlerts

`func (o *DeleteGlobalAlertsRequest) HasGlobalAlerts() bool`

HasGlobalAlerts returns a boolean if a field has been set.

### GetLinks

`func (o *DeleteGlobalAlertsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeleteGlobalAlertsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeleteGlobalAlertsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeleteGlobalAlertsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DeleteGlobalAlertsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeleteGlobalAlertsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeleteGlobalAlertsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeleteGlobalAlertsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


