# PutDailyDocketRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyDocketEntries** | Pointer to [**DailyDocketType**](DailyDocketType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutDailyDocketRequest

`func NewPutDailyDocketRequest() *PutDailyDocketRequest`

NewPutDailyDocketRequest instantiates a new PutDailyDocketRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDailyDocketRequestWithDefaults

`func NewPutDailyDocketRequestWithDefaults() *PutDailyDocketRequest`

NewPutDailyDocketRequestWithDefaults instantiates a new PutDailyDocketRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyDocketEntries

`func (o *PutDailyDocketRequest) GetDailyDocketEntries() DailyDocketType`

GetDailyDocketEntries returns the DailyDocketEntries field if non-nil, zero value otherwise.

### GetDailyDocketEntriesOk

`func (o *PutDailyDocketRequest) GetDailyDocketEntriesOk() (*DailyDocketType, bool)`

GetDailyDocketEntriesOk returns a tuple with the DailyDocketEntries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyDocketEntries

`func (o *PutDailyDocketRequest) SetDailyDocketEntries(v DailyDocketType)`

SetDailyDocketEntries sets DailyDocketEntries field to given value.

### HasDailyDocketEntries

`func (o *PutDailyDocketRequest) HasDailyDocketEntries() bool`

HasDailyDocketEntries returns a boolean if a field has been set.

### GetLinks

`func (o *PutDailyDocketRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDailyDocketRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDailyDocketRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDailyDocketRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDailyDocketRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDailyDocketRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDailyDocketRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDailyDocketRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


