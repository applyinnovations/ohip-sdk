# DailyDocket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyDocketEntries** | Pointer to [**DailyDocketType**](DailyDocketType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDailyDocket

`func NewDailyDocket() *DailyDocket`

NewDailyDocket instantiates a new DailyDocket object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyDocketWithDefaults

`func NewDailyDocketWithDefaults() *DailyDocket`

NewDailyDocketWithDefaults instantiates a new DailyDocket object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyDocketEntries

`func (o *DailyDocket) GetDailyDocketEntries() DailyDocketType`

GetDailyDocketEntries returns the DailyDocketEntries field if non-nil, zero value otherwise.

### GetDailyDocketEntriesOk

`func (o *DailyDocket) GetDailyDocketEntriesOk() (*DailyDocketType, bool)`

GetDailyDocketEntriesOk returns a tuple with the DailyDocketEntries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyDocketEntries

`func (o *DailyDocket) SetDailyDocketEntries(v DailyDocketType)`

SetDailyDocketEntries sets DailyDocketEntries field to given value.

### HasDailyDocketEntries

`func (o *DailyDocket) HasDailyDocketEntries() bool`

HasDailyDocketEntries returns a boolean if a field has been set.

### GetLinks

`func (o *DailyDocket) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DailyDocket) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DailyDocket) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DailyDocket) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DailyDocket) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DailyDocket) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DailyDocket) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DailyDocket) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


